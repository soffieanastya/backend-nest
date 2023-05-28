import { Delete, Post, Put, Controller, Get, UseGuards, Param, Body, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegionsService } from 'src/service/regions/regions.service';
// import { RegionsService } from 'src/service/regions/regions.service';


@Controller('region')
export class RegionsController {
    constructor(private readonly regionServices : RegionsService){

    }

    // @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll(){
        return this.regionServices.findAll();
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findOne(@Param() parameter:any){
        return this.regionServices.findOne(parameter.id);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Post()
    createRegion(@Body() body){
        return this.regionServices.createRegion(body)
    }

    // @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateRegion(@Param('id') id: any, @Body() body:any){
        // let region_id = Number(id);
        return this.regionServices.updateRegion(id, body)
    }

    // @Put()
    // updateRegion(@Req() req, @Res() res){
    //     return this.regionServices.update(req.regionId, req);
    // }

    @Delete(':id')
    deleteRegion(@Param('id') id:any ){
        return this.regionServices.deleteRegion(id);
    }
}

