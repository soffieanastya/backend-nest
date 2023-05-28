import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestoMenuPhotos } from 'model/entities/RestoMenuPhotos';
import { UploadController } from 'src/controller/upload/upload.controller';
import { UploadService } from 'src/service/upload/upload.service';
@Module({
    
    imports: [TypeOrmModule.forFeature([RestoMenuPhotos])],
    controllers: [UploadController],
    providers: [UploadService]
})
export class UploadModule {}
