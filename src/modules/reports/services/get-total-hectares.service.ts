import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class GetTotalHectaresService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(): Promise<Object> {
        try{
            const data = await this.prismaService.producer.aggregate({
                _sum: {
                    total_area: true
                },
                where: {
                    deleted_at: null
                }
            });

            const total = data?._sum.total_area;

            return {total};
        } catch (error) {
            throw new HttpException(
                'Erro ao listar o total de hectares',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
