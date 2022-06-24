import { Test } from "@nestjs/testing";
import { PrismaService } from "../../prisma/services/prisma.service";
import FindAllProducersService from "./find-all-producers.service";
import { Producer } from "@prisma/client";

describe("FindAllProducersService", () => {
    let findAllProducersService: FindAllProducersService;

    beforeEach(async() => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                FindAllProducersService,
                PrismaService,
            ]
        }).compile();

        findAllProducersService = moduleRef.get<FindAllProducersService>(FindAllProducersService);
    });

    it('should be defined', async () => {
        expect(findAllProducersService).toBeDefined();
    });

    it('should return an array of producers', async () => {
        const result: Producer[] = [{
            id: 1,
            cpf: "",
            name: "",
            farm_name: "",
            city: "",
            state: "",
            total_area: 10,
            total_arable_area: 5,
            total_vegetation_area: 5,
            crops: 'Batata, Cebola',
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: new Date(),
        }];

        jest.spyOn(findAllProducersService, 'execute').mockImplementation(async() => result);

        expect(await findAllProducersService.execute()).toEqual(result);
    });
});
