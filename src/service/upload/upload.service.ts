import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestoMenuPhotos } from 'model/entities/RestoMenuPhotos';
import { Repository } from "typeorm"

@Injectable()
export class UploadService {
    constructor(@InjectRepository(RestoMenuPhotos) private restoMenuPhotos: Repository<RestoMenuPhotos>){}
    // constructor(@InjectRepository(Regions) private regionRepository: Repository<Regions>){

    // }
    async getMenuPhoto(){
        return await this.restoMenuPhotos.find();
    }

    async uploadPict(file:any,body:any){
        // return file;
        return await this.restoMenuPhotos.insert({
            rempThumbnailFilename: body.rempThumbnailFilename,
            rempPhotoFilename: body.rempPhotoFilename,
            rempPrimary: body.rempPrimary,
            rempUrl: file.path,
            rempRemeId: body.rempRemeId
        })
        
        
        
    }
}
