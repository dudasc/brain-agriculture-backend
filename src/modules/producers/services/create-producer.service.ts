import { Injectable } from "@nestjs/common";
import { Prisma, Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";
import UserAlreadyExistsException from "../exceptions/user-already-exists.exception";

@Injectable()
export default class CreateProducerService{
    public constructor(private prismaService: PrismaService) {}

    public async execute(data: Prisma.ProducerCreateInput): Promise<any> {
        // const producer =await this.prismaService.producer.findFirst({
        //     where: {
        //         cpf: data.cpf
        //     }
        // });

        // if(producer){
        //     throw new UserAlreadyExistsException("CPF informado já existe");
        // }

        return await Prisma.validator<Prisma.ProducerCreateInput>()(data);
    }
}
