import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/service/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    // dipanggil sama local.strategy
    async validateUser(pusername, ppassword){
        // console.log(username + 'di b');
        
        const user = await this.userService.findOneUser(pusername);
        // console.log(user);
        
        if(user){
            // cek pasword
            if(bcrypt.compareSync(ppassword, user.password)){
                // console.log('masuk ' + ppassword);

                return user;
            }
        }else{
            // return 'username tidak tersedia'
            return null;
        }
    }

    async login(user: any){
        const payload = { username: user.username };

        return {
            message: 'login success!',
            // ambil token yang nantinya dimasukin ke headers di postman
            access_token: this.jwtService.sign(payload)
        }
    }

}
