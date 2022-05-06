import { Controller, Get, HttpException, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
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
    public async getTotalFarms(
        @Res() resp: Response,
    ) {
        try {
            return resp.send(await this.getTotalFarmsService.execute());
        } catch (error) {
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get('total-hectares')
    public async getTotalHectares(
        @Res() resp: Response,
    ) {
        try {
            return resp.send(await this.getTotalHectaresService.execute());
        } catch (error) {
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get('total-arable-area')
    public async getTotalArableArea(
        @Res() resp: Response,
    ) {
        try {
            return resp.send(await this.getTotalArableAreaService.execute());
        } catch (error) {
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get('farms-by-state')
    public async getTotalFarmsByState(
        @Res() resp: Response,
    ) {
        try {
            return resp.send(await this.getTotalFarmsByStateService.execute());
        } catch (error) {
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get('type-area')
    public async getTotalAreaType(
        @Res() resp: Response,
    ) {
        try {
            return resp.send(await this.getTotalTypeAreaService.execute());
        } catch (error) {
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
