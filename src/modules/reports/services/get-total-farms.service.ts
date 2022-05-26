import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class GetTotalFarmsService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(): Promise<Object> {
        try{
            const total = await this.prismaService.producer.count({
                where: {
                    deleted_at: null
                }
            });

            return { total };
        } catch (error) {
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
