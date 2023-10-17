import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { ProductsModule } from '../products/products.module'
import { ProductsService } from '../products/products.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from 'src/entities/products.entity';


@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([Product])],
  providers: [TaskService, ProductsService]
})
export class TaskModule {}
