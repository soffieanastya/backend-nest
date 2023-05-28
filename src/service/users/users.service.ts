import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'model/entities/Users';
import * as jwt from 'jsonwebtoken'
import { fileDto } from 'src/file.dto';
// import { fileEntity } from 'src/file.entity';

import { Repository } from "typeorm"

// import { InjectRepository } from '@nestjs/typeorm';
// import { Person } from 'model/entities/Person';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){

    }
    // constructor( @InjectRepository(fileEntity) private userRepository: Repository<fileEntity>){

    // }
    //menampilkan semua user
    async findUser(): Promise<any>{
        return await this.userRepository.find();
    }

    //find one user / login
    async findOneUser(data:any): Promise<any>{
        return await this.userRepository.findOne(
            {
                where : {username: data}
            }
        );
    }

    //membuat user
    async createUser(data:any){
        let isi = await this.userRepository.create(data);

        const salt=bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password,salt);

        const newUser = await this.userRepository.insert({
            username:data.username,
            password:hash
        })

        return isi;
    }

    // update user
    async updateUser(id:number, data: Users){   // ambil dari database Usersy
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);

        // await 
        const perbarui = await this.userRepository
            .update({
                idUser: id,
            },
            {
                username: data.username,
                password: hash
            }
            )
        return perbarui;

    }

    // hapus user berdasarkan id
    async deleteUser(deleteId: any): Promise <any>{
        // idUser tuh id_user, cuma di convert sama nestjs ini jadi begitu namanya
        return await this.userRepository.delete( 
            { idUser: deleteId}
        )
    }

    // //login
    async login(data: any){
        // cek data uname ada atau ga
        const oneUser = await this.userRepository.findOneBy(
            {
                username: data.username
            }
        );

        // kalau user ada
        if(oneUser){
            // console.log('halo ' + oneUser.username);
            
            //kalau password bener
            if(bcrypt.compareSync(data.password, oneUser.password)){
                console.log('password bener nih')
                // let token2 = jwtService
                let token = jwt.sign(data.username, process.env.SECRET_KEY, 
                    { expiresIn: '1d'}
                    );
                
                // console.log(token)

                return {
                    message: 'kamu berhasil login ' + data.username,
                    token: token
                }
            }else{
                //password salah
                console.log('password salah ')
            }
        }else{
            // username tidak ada
            return "username salah";
        }
    }
}
