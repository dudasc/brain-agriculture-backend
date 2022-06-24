import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Producer } from "@prisma/client";
import { PrismaService } from "../../prisma/services/prisma.service";
import ListProducersParamsDto from "../dtos/list-producers-params.dto";

@Injectable()
export default class FindAllProducersService{
    public constructor(private prismaService: PrismaService) {}

    public async execute(params?: ListProducersParamsDto): Promise<Producer[]> {
        try{
            return await this.prismaService.producer.findMany({
                where: {
                    deleted_at: null
                }
            });
        } catch (error) {
            throw new HttpException(
                'Erro ao buscar produtores',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
