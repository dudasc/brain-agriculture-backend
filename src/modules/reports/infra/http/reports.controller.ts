import { Controller, Get, HttpException, HttpStatus, Res } from "@nestjs/common";
import { Response } from "express";
import GetTotalArableAreaService from "../../services/get-total-arable-area.service";
import GetTotalFarmsService from "../../services/get-total-farms.service";
import GetTotalHectaresService from "../../services/get-total-hectares.service";

@Controller({
    path: 'reports',
})
export class ReportsController {
    public constructor(
        public getTotalFarmsService: GetTotalFarmsService,
        private getTotalHectaresService: GetTotalHectaresService,
        private getTotalArableAreaService: GetTotalArableAreaService
    ) { }

    @Get('total-farms')
    public async getTotalFarms(
        @Res() resp: Response,
    ) {
        try {
            return resp.send(await this.getTotalFarmsService.execute());
        } catch (error) {
            console.log(error);
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
            console.log(error);
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
            console.log(error);
            throw new HttpException(
                'Erro ao listar total de fazendas',
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
