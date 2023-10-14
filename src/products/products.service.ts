import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import Product from 'src/entities/products.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productsRepository.find()
  }

  async findById(id : number) {
    return await this.productsRepository.findOneBy({id})
  }

  async createProduct(data: Product): Promise<Product | string> {
    try{
      return await this.productsRepository.save(data);
    }catch(err) {
      return "input data is not correct"
    }
  }

  async deleteProduct(id : number) : Promise<any> {
    const product = await this.findById(id)
    if (product) {
      await this.productsRepository.remove(product)
      return product
    }
    return "product does not found"
  }

  async updateProduct(id : number, data : Partial<Product>) :Promise<Product | string> {
    const product = await this.findById(id)
    if(!product) {
      return "product is not exist"
    }

    const updatedProduct = Object.assign(product, data)

    return await this.productsRepository.save(updatedProduct)
    
  }
}