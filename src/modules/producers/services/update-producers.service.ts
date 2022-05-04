import { Injectable } from "@nestjs/common";
import { Prisma, Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class UpdateProducerService{
    public constructor(private prismaService: PrismaService) {}

    public async execute(params: Prisma.ProducerWhereUniqueInput, data: Prisma.ProducerUpdateInput): Promise<Producer> {
        const where: any = {
            id: +params.id
        };

        return await this.prismaService.producer.update({data, where});
    }
}
