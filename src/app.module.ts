import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegionsModule } from './module/regions/regions.module';
import { UsersModule } from './module/users/users.module';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './service/users/users.service';
// import dataSour
// import { RegionsModule } from './regions/regions.module';
// import { InjectRepository } from '@nestjs/typeorm';
// import { RegionsModule } from './regions.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadModule } from './module/upload/upload.module';

@Module({
  // import module
  imports: [
    // ConfigModule.forRoot(
    //     envFilePath: env/${'development'}.env
    //   ),
    TypeOrmModule.forRoot({

        // imports: [ConfigModule],
        // injects: [ConfigService],
        // useFactory: (configService: ConfigService) => ({
            
            
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: "postgres",
            password : "root",
            database : "awaldb",
            // entities : ['./dist/model/entities/*{.ts,.js}'],
            entities : [],
            autoLoadEntities: true,
            synchronize : false

      }),
      RegionsModule,
      UsersModule,
      AuthModule,

      // untuk upload file, express middleware to upload file
      MulterModule.register({
        dest: '../uploads',

      }),
      UploadModule

  ],
  controllers: [AppController],
  providers: [AppService]

})
export class AppModule {}
