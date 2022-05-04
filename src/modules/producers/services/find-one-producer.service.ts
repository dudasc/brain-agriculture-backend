import { Injectable } from "@nestjs/common";
import { Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class FindOneProducerService {
    public constructor(private prismaService: PrismaService) { }

    public async execute(id: number): Promise<Producer> {
        return await this.prismaService.producer.findFirst({
            where: {
                id: +id,
                deleted_at: null
            }
        });
    }
}
