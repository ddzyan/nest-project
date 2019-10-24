import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  age: number;

  @Column()
  breed: string;
}
