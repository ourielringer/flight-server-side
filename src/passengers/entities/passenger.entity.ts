import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Ordering } from "src/ordering/entities/ordering.entity";

@Entity()
export class Passenger {

    @ManyToOne(() => Ordering, order => order.passengers)
    idorder: number;

    @Column()
    idflightgo: number

    @Column()
    idflightback: number

    @Column()
    name: string

    @Column()
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lastname: string

    @Column()
    ID: number

    @Column()
    MorMr: string

    @Column()
    age: string

    @Column()
    sity: string
}
