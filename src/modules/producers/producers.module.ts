import { Module } from '@nestjs/common';
import { ProducersController } from './infra/http/producers.controller';
import CreateProducerService from './services/create-producer.service';
import FindAllProducersService from './services/find-all-producers.service';
import FindOneProducerService from './services/find-one-producer.service';
import RemoveProducerService from './services/remove-producer.service';
import UpdateProducerService from './services/update-producers.service';

@Module({
    controllers: [
        ProducersController
    ],
    providers: [
        FindAllProducersService,
        FindOneProducerService,
        CreateProducerService,
        UpdateProducerService,
        RemoveProducerService
    ],
    exports: []
})
export class ProducersModule {}
