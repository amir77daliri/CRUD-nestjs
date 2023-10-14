import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'


@Entity("products")
export default class Product {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    price: number;

    @Column({default: true})
    is_available: boolean
    
}