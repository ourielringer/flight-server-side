import { Reservation } from "src/reservation/entities/reservation.entity"
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Passenger {

    @Column()
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

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

    @Column()
    idReservation:number
}
