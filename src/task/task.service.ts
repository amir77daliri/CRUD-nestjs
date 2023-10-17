import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule'
import axios from 'axios';

import { ProductsService } from '../products/products.service'

@Injectable()
export class TaskService {

    constructor(private readonly productService : ProductsService){}

    @Interval(60 * 2 * 1000)
    async handleInterval() {
        const response = await axios.get("http://localhost:9000/products")
        try {
            const result = await this.productService.saveProductsFromTask(response.data)
            console.log(result)
            return result
        } catch (error) {
            console.log('error')
        }
    }
}
