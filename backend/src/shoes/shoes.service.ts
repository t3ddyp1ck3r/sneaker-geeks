import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shoe } from './shoe.entity';

@Injectable()
export class ShoesService {
    constructor(
        @InjectRepository(Shoe)
        private readonly shoeRepository: Repository<Shoe>,
    ) {}

    findAll(): Promise<Shoe[]> {
        return this.shoeRepository.find();
    }
}
