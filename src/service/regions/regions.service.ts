import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm"
import { Regions } from 'model/entities/Regions';

@Injectable()
export class RegionsService {
    constructor(@InjectRepository(Regions) private regionRepository: Repository<Regions>){

    }

    
    async findAll(): Promise<any> {
        return await this.regionRepository.find();
    }

    async findOne(id:any){
        let regionid = Number(id);
        // console.log(regionid);
        
        return await this.regionRepository.findOne(
            { 
                where : { regionId: regionid }
             }
        )
    }

    async createRegion(data:any){
        await this.regionRepository.insert({
            regionName: data.regionName
        })
    }

    async updateRegion(id:any, data: Regions){
        let id_region = Number(id)
        // console.log(id_region + "ini update");
        
        await this.regionRepository.update({
            regionId: id_region,
        },
        {
            regionName: data.regionName
        })
    }

    
    // async update(id, req){
    //     // let id_region = Number(id)
    //     await this.regionRepository.update({
    //         regionId: id,
    //     },
    //     {
    //         regionName: req.regionName
    //     })
    // }

    async deleteRegion(deleteId: any): Promise<any>{
        return await this.regionRepository.delete(
            { regionId: deleteId}
        )
    }
}
