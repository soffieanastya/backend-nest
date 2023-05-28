import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/module/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
    controllers: [AuthController],
    imports: [UsersModule, PassportModule,
                // buat token nantinya
                JwtModule.register({
                    // ada kode rahasia di file constant
                    secret: jwtConstants.secret,
                    signOptions: {
                        expiresIn: '2h'
                    }
                })],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
