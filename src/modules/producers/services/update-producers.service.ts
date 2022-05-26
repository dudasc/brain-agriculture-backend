import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";
import InvalidTotalAreaException from "../exceptions/invalid-total-area.exception";
import UserAlreadyExistsException from "../exceptions/user-already-exists.exception";

@Injectable()
export default class UpdateProducerService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(params: Prisma.ProducerWhereUniqueInput, data: Prisma.ProducerCreateInput): Promise<Producer> {
        const producer = await this.prismaService.producer.findFirst({
            where: {
                cpf: data?.cpf,
                NOT: {
                    id: +params.id
                }
            }
        });

        if (producer) {
            throw new UserAlreadyExistsException();
        }

        if ((data?.total_arable_area + data?.total_vegetation_area) !== data.total_area) {
            throw new InvalidTotalAreaException();
        }

        const where: any = {
            id: +params.id
        };

        try {
            return await this.prismaService.producer.update({ data, where });
        } catch (error) {
            throw new HttpException(
                'Erro ao atualizar o produtor',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
