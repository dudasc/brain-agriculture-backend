import { Injectable } from "@nestjs/common";
import { Prisma, Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";
import InvalidTotalAreaException from "../exceptions/invalid-total-area.exception";
import UserAlreadyExistsException from "../exceptions/user-already-exists.exception";

@Injectable()
export default class CreateProducerService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(data: Prisma.ProducerCreateInput): Promise<any> {
        const producer = await this.prismaService.producer.findFirst({
            where: {
                cpf: data?.cpf
            }
        });

        if (producer) {
            throw new UserAlreadyExistsException("CPF informado já existe");
        }

        if ((data?.total_arable_area + data?.total_vegetation_area) !== data.total_area) {
            throw new InvalidTotalAreaException("A soma da área arável e da área de vegetação deve ser igual a área total");
        }

        return await this.prismaService.producer.create({ data });
    }
}
