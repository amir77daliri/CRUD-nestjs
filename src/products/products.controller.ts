import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import Product from 'src/entities/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.productsService.findById(+id)
  }

  @Post()
  async createProduct(@Body() data: Product) {
    return await this.productsService.createProduct(data)
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productsService.deleteProduct(+id)
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() data: Partial<Product> ) {
    return await this.productsService.updateProduct(+id, data)
  }

}
