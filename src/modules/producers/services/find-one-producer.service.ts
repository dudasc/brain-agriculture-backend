import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class FindOneProducerService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(id: number): Promise<Producer> {
        try {
            return await this.prismaService.producer.findFirst({
                where: {
                    id: +id,
                    deleted_at: null
                }
            });
        } catch (error) {
            throw new HttpException(
                'Erro ao buscar produtor',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
