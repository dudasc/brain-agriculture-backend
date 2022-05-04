import { Injectable } from "@nestjs/common";
import { Prisma, Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class RemoveProducerService{
    public constructor(private prismaService: PrismaService) {}

    public async execute(params: Prisma.ProducerWhereUniqueInput): Promise<Producer> {
        const data: any = {
            deleted_at: new Date()
        };

        const where: any = {
            id: +params.id
        };

        return await this.prismaService.producer.update({data, where});
    }
}
