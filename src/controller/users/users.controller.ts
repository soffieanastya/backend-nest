import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Users } from 'model/entities/Users';
import { fileDto } from 'src/file.dto';


import { UsersService } from 'src/service/users/users.service';
// import {} from fileDto
@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService){

    }
    @Get()
    findUser(){
        return this.userServices.findUser();
    }

    @Post('username')
    findOneUser(@Body() body){
        return this.userServices.findOneUser(body)
    }

    // coba create user
    @Post('create')
    createUser(@Body() body: Users){
        return this.userServices.createUser(body)
    }

    // // UPDATE USER (PERBAIKI LAGI NIH MASALAHNYA ADA DI PASSWORD YG UDH DI HASH)
    @Put(':id')
    updateUser(@Param('id') id: number, @Body() body:any){
        return this.userServices.updateUser(id, body)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.userServices.deleteUser(id);
    }

    @Post('login')
    login(@Body() body){
        // console.log("masuk ke users controller");
        return this.userServices.login(body);
    }
}
