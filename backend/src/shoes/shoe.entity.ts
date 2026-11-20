import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shoes')
export class Shoe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { 
    precision: 10, 
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
 })
  
price: number;

@Column({ name:'image_url', nullable: true })
imageUrl: string;

@Column({ nullable: true })
sport: string;

@Column({ name: 'is_on_sale', default: false })
isOnSale: boolean;
}