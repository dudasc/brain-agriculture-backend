import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class GetTotalFarmsByStateService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(): Promise<Object> {
        const data = await this.prismaService.producer.groupBy({
            by: ['state'],
            _count: {
                id: true,
            },
            where: {
                deleted_at: null
            }
        });

        const formattedData: any = [];

        data.map((item) => {
            let values = {
                name: item.state,
                value: item._count.id,

            };

            formattedData.push(values);
        });

        return formattedData;
    }
}
