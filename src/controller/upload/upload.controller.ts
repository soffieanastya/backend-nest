import { Get, Body, Controller, Post, UploadedFiles, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

// untuk multer or simpen gambar di storage / folder upload image
import { diskStorage } from 'multer'
import { UploadService } from 'src/service/upload/upload.service';
import { Helper } from 'src/uploadHelper/helper';
@Controller('upload')
export class UploadController {
    // panggl service disini
    constructor(private readonly uploadService: UploadService){}

    @Get()
    getMenuPhoto(){
        return this.uploadService.getMenuPhoto();
    }


    @Post()
    @UseInterceptors(FileInterceptor('rempUrl', {
        storage:diskStorage({
                destination: Helper.storage,
                filename:Helper.customFileName
        })
    }))
    uploadPict(@UploadedFile() file: Express.Multer.File, @Body() body){
        // console.log(files, body.rempThumbnailFilename);
        // let filename = Helper.customFileName(req, files, callback);
        // console.log(filename);

        
        // let url = URL.createObjectURL(body.rempUrl)
        // console.log("ini url : ", url);
        
        console.log("ini controller ",file); // dapet datanya, ternyata @UploadedFile bukan @UploadedFiles
        return this.uploadService.uploadPict(file,body);
    }
}
