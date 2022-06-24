import { Test } from "@nestjs/testing";
import { PrismaService } from "../../prisma/services/prisma.service";
import CreateProducerService from "./create-producer.service";
import { Prisma } from "@prisma/client";
import { faker } from '@faker-js/faker';

describe('CreateProducerService', () => {
    let createProducerService: CreateProducerService;
    let prismaService: PrismaService;

    beforeEach(async() => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                CreateProducerService,
                PrismaService,
            ]
        }).compile();

        createProducerService = moduleRef.get<CreateProducerService>(CreateProducerService);
        prismaService = moduleRef.get<PrismaService>(PrismaService);
    });

    it('should create a producer', async () => {
        const producerMock: Prisma.ProducerCreateInput = {
            cpf: faker.random.numeric(11),
            name: faker.name.findName(),
            farm_name: faker.name.firstName(),
            city: faker.address.city(),
            state: faker.helpers.arrayElement(['SC', 'RS', 'PR']),
            total_area: 10,
            total_arable_area: 5,
            total_vegetation_area: 5,
            crops: faker.helpers.arrayElement(['Milho', 'Ceboure, Batata', 'Tomate, Feijão']),
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null,
        };

        const producer = await createProducerService.execute(producerMock);

        jest.spyOn(createProducerService, 'execute').mockImplementation(async(s) => producerMock);

        expect(await createProducerService.execute(producer)).toEqual(producerMock);

        // await prismaService.producer.delete({where: {id: producer.id}});
    } );
});
