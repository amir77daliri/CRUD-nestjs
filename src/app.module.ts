import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

import { TypeOrmModule } from '@nestjs/typeorm'
import Product from './entities/products.entity';

import { ScheduleModule } from '@nestjs/schedule'

import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'amir',
    password: 'amir77',
    database: 'nest',
    entities: [Product],
    synchronize: true
  }), 

  ProductsModule, TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
