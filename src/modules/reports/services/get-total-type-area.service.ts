import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class GetTotalTypeAreaService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(): Promise<Object> {
        try {
            const data = await this.prismaService.producer.aggregate({
                _sum: {
                    total_arable_area: true,
                    total_vegetation_area: true
                },

                where: {
                    deleted_at: null
                }
            });

            const formattedData: any = [
                {
                    name: "Arável",
                    value: data._sum.total_arable_area
                },
                {
                    name: "Vegetação",
                    value: data._sum.total_vegetation_area
                }
            ];

            return formattedData;
        } catch (error) {
            throw new HttpException(
                'Erro ao listar os tipos de área',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
