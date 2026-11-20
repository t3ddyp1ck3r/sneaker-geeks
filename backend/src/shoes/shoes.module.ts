import { Module } from '@nestjs/common';
import { ShoesController } from './shoes.controller';
import { ShoesService } from './shoes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shoe } from './shoe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shoe])],
  controllers: [ShoesController],
  providers: [ShoesService]
})
export class ShoesModule {}
