import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'model/entities/Users';
import { UsersController } from 'src/controller/users/users.controller';
import { UsersService } from 'src/service/users/users.service';
// import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]    // buat di tampung sama authservice
})
export class UsersModule {}
