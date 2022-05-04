import { Module } from '@nestjs/common';
import { ReportsController } from './infra/http/reports.controller';
import GetTotalArableAreaService from './services/get-total-arable-area.service';
import GetTotalFarmsService from './services/get-total-farms.service';
import GetTotalHectaresService from './services/get-total-hectares.service';

@Module({
    controllers: [ReportsController],
    providers: [
        GetTotalFarmsService,
        GetTotalHectaresService,
        GetTotalArableAreaService
    ]
})
export class ReportsModule {}
