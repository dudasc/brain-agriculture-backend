import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { Prisma, Producer } from '@prisma/client';
import ListProducersParamsDto from '../../dtos/list-producers-params.dto';
import CreateProducerService from '../../services/create-producer.service';
import FindAllProducersService from '../../services/find-all-producers.service';
import FindOneProducerService from '../../services/find-one-producer.service';
import RemoveProducerService from '../../services/remove-producer.service';
import UpdateProducerService from '../../services/update-producers.service';

@Controller({
    path: 'producers',
})
export class ProducersController {
    public constructor(
		public findAllProducersService: FindAllProducersService,
		public findOneProducerService: FindOneProducerService,
		public createProducerService: CreateProducerService,
		public updateProducerService: UpdateProducerService,
		public removeProducerService: RemoveProducerService
    ) { }

	@Get()
    public async index(
		@Body() params: ListProducersParamsDto
    ) {
        return await this.findAllProducersService.execute(params);
    }

	@Get('/:id')
	public async show(
		@Param() params: ListProducersParamsDto
	) {
	    return await this.findOneProducerService.execute(params.id);
	}

	@Post()
	public async store(
		@Body() data: Producer
	) {
	    return await this.createProducerService.execute(data);
	}

	@Patch('/:id')
	public async update(
		@Param() params: Prisma.ProducerWhereUniqueInput,
		@Body() data: Prisma.ProducerCreateInput
	) {
	    return await this.updateProducerService.execute(params, data);
	}

	@Delete('/:id')
	public async remove(
		@Param() params: Prisma.ProducerWhereUniqueInput
	) {
	    return await this.removeProducerService.execute(params);
	}
}
