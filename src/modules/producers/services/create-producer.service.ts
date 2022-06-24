import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../prisma/services/prisma.service";
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
            throw new UserAlreadyExistsException();
        }

        if ((data?.total_arable_area + data?.total_vegetation_area) !== data.total_area) {
            throw new InvalidTotalAreaException();
        }

        try {
            return await this.prismaService.producer.create({ data });
        } catch (error) {
            throw new HttpException(
                'Erro ao atualizar o produtor',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
