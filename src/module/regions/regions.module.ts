import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regions } from 'model/entities/Regions';
import { RegionsController } from 'src/controller/regions/regions.controller';
import { RegionsService } from 'src/service/regions/regions.service';
// import { RegionsService } from 'src/service/regions/regions.service';

@Module({
    imports: [TypeOrmModule.forFeature([Regions])],
    controllers: [RegionsController],
    providers: [RegionsService]
})
export class RegionsModule {}
