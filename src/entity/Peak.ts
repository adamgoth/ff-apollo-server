import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Peak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @Column()
  range: string;

  @Column()
  class: string;

  @Column()
  distance: number;

  @Column()
  totalGain: number;

  @Column()
  route: string;
}
