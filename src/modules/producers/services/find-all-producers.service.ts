import { Injectable } from "@nestjs/common";
import { Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";
import ListProducersParamsDto from "../dtos/list-producers-params.dto";

@Injectable()
export default class FindAllProducersService{
    public constructor(private prismaService: PrismaService) {}

    public async execute(params: ListProducersParamsDto): Promise<Producer[]> {
        return await this.prismaService.producer.findMany({
            where: {
                deleted_at: null
            }
        });
    }
}
