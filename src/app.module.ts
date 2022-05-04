import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { ProducersModule } from './modules/producers/producers.module';
import { ReportsModule } from './modules/reports/reports.module';

@Module({
    imports: [PrismaModule, ProducersModule, ReportsModule],
})
export class AppModule { }
