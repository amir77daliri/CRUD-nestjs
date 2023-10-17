import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import Product from 'src/entities/products.entity';
import {CreateProductDto, DTO} from './dto/products.dto'
import { Inject } from '@nestjs/common'



@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    ) {}


  @Get()
  async findAll() : Promise<Product[]> {
    return await this.productsService.findAll()
  }


  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.findById(id)
  }

  @Post()
  async createProduct(@Body() createDtoProduct) {
    
    // return await this.productsService.createProduct(createDtoProduct)
    return createDtoProduct
  }

  @Delete()
  async deleteAllProducts(){
    return await this.productsService.deletAllProducts()
  }

  
  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: string) {
    return await this.productsService.deleteProduct(+id)
  }

  @Patch(':id')
  async updateProduct(@Param('id', ParseIntPipe) id: string, @Body() data: Partial<Product> ) {
    return await this.productsService.updateProduct(+id, data)
  }

}
