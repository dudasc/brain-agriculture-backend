import { Controller, Get } from "@nestjs/common";
import GetTotalArableAreaService from "../../services/get-total-arable-area.service";
import GetTotalFarmsByStateService from "../../services/get-total-farms-by-state.service";
import GetTotalFarmsService from "../../services/get-total-farms.service";
import GetTotalHectaresService from "../../services/get-total-hectares.service";
import GetTotalTypeAreaService from "../../services/get-total-type-area.service";

@Controller({
    path: 'reports',
})
export class ReportsController {
    public constructor(
        public getTotalFarmsService: GetTotalFarmsService,
        private getTotalHectaresService: GetTotalHectaresService,
        private getTotalArableAreaService: GetTotalArableAreaService,
        private getTotalFarmsByStateService: GetTotalFarmsByStateService,
        private getTotalTypeAreaService: GetTotalTypeAreaService,
    ) { }

    @Get('total-farms')
    public async getTotalFarms() {
        return await this.getTotalFarmsService.execute();
    }

    @Get('total-hectares')
    public async getTotalHectares() {
        return await this.getTotalHectaresService.execute();
    }

    @Get('total-arable-area')
    public async getTotalArableArea() {
        return await this.getTotalArableAreaService.execute();
    }

    @Get('farms-by-state')
    public async getTotalFarmsByState() {
        return await this.getTotalFarmsByStateService.execute();
    }

    @Get('type-area')
    public async getTotalAreaType() {
        return await this.getTotalTypeAreaService.execute();
    }
}
