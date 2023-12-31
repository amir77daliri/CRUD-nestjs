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

  async saveProductsFromTask( products : Product[] ) {
    try {
      await this.productsRepository.save(products)
      return "add successfully"
    } catch (error) {
      return {msg: 'failed to add', error}
    }
  }
  
  async findById(id : number) {
    return await this.productsRepository.findOneBy({id})
  }

  async createProduct(data): Promise<Product | object> {
    try{
      return await this.productsRepository.save(data);
    }catch(err) {
      return {msg:"input data is not correct", err}
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

  async deletAllProducts() :Promise<string>{
    await this.productsRepository.delete({})
    return 'all products deleted'
  }
}