import { Test } from "@nestjs/testing";
import { PrismaService } from "../../prisma/services/prisma.service";
import GetTotalFarmsService from "./get-total-farms.service";

describe('GetTotalFarmsService', () => {
    let getTotalFarmsService: GetTotalFarmsService;

    beforeEach(async() => {
        const moduleRef = await Test.createTestingModule({
            providers: [GetTotalFarmsService, PrismaService]
        }).compile();

        getTotalFarmsService = moduleRef.get<GetTotalFarmsService>(GetTotalFarmsService);
    });

    describe('execute function return', () => {
        it('should be defined', async () => {
            expect(getTotalFarmsService).toBeDefined();
        });

        it('should return total number of farms', async () => {
            const {total}: any = await getTotalFarmsService.execute();

            expect(total).toEqual(expect.any(Number));
        });
    });
});
