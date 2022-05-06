import { Module } from '@nestjs/common';
import { ReportsController } from './infra/http/reports.controller';
import GetTotalArableAreaService from './services/get-total-arable-area.service';
import GetTotalFarmsByStateService from './services/get-total-farms-by-state.service';
import GetTotalFarmsService from './services/get-total-farms.service';
import GetTotalHectaresService from './services/get-total-hectares.service';
import GetTotalTypeAreaService from './services/get-total-type-area.service';

@Module({
    controllers: [ReportsController],
    providers: [
        GetTotalFarmsService,
        GetTotalHectaresService,
        GetTotalArableAreaService,
        GetTotalFarmsByStateService,
        GetTotalTypeAreaService
    ]
})
export class ReportsModule {}
