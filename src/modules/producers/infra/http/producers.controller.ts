import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Put,
    Res,
} from '@nestjs/common';
import { Prisma, Producer } from '@prisma/client';
import { Response } from 'express';
import ListProducersParamsDto from '../../dtos/list-producers-params.dto';
import InvalidTotalAreaException from '../../exceptions/invalid-total-area.exception';
import UserAlreadyExistsException from '../../exceptions/user-already-exists.exception';
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
		@Body() params: ListProducersParamsDto,
		@Res() resp: Response,
    ) {
        try {
            return resp.send(await this.findAllProducersService.execute(params));
        } catch (error) {
            throw new HttpException(
                'Erro ao listar produtores',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

	@Get('/:id')
	public async show(
		@Param() params: ListProducersParamsDto,
		@Res() resp: Response,
	) {
	    try {
	        return resp.send(await this.findOneProducerService.execute(params.id));
	    } catch (error) {
	        throw new HttpException(
	            'Erro ao listar produtor',
	            HttpStatus.BAD_REQUEST,
	        );
	    }
	}

	@Post()
	public async store(
		@Body() data: Producer,
		@Res() resp: Response,
	) {
	    try {
	        return resp.send(await this.createProducerService.execute(data));
	    } catch (error: any) {
	        if (error instanceof UserAlreadyExistsException) {
	            throw new HttpException(
	                error.getMessage(),
	                HttpStatus.INTERNAL_SERVER_ERROR,
	            );
	        }

	        if (error instanceof InvalidTotalAreaException) {
	            throw new HttpException(
	                error.getMessage(),
	                HttpStatus.INTERNAL_SERVER_ERROR,
	            );
	        }

	        throw new HttpException(
	            'Erro ao inserir o produtor',
	            HttpStatus.BAD_REQUEST,
	        );
	    }
	}

	@Patch('/:id')
	public async update(
		@Param() params: Prisma.ProducerWhereUniqueInput,
		@Body() data: Prisma.ProducerCreateInput,
		@Res() resp: Response,
	) {
	    try {
	        return resp.send(await this.updateProducerService.execute(params, data));
	    } catch (error) {
	        if (error instanceof UserAlreadyExistsException) {
	            throw new HttpException(
	                error.getMessage(),
	                HttpStatus.INTERNAL_SERVER_ERROR,
	            );
	        }

	        if (error instanceof InvalidTotalAreaException) {
	            throw new HttpException(
	                error.getMessage(),
	                HttpStatus.INTERNAL_SERVER_ERROR,
	            );
	        }

	        throw new HttpException(
	            'Erro ao atualizar o produtor',
	            HttpStatus.BAD_REQUEST,
	        );
	    }
	}

	@Delete('/:id')
	public async remove(
		@Param() params: Prisma.ProducerWhereUniqueInput,
		@Res() resp: Response,
	) {
	    try {
	        return resp.send(await this.removeProducerService.execute(params));
	    } catch (error) {
	        throw new HttpException(
	            'Erro ao remover o produtor',
	            HttpStatus.BAD_REQUEST,
	        );
	    }
	}
}
