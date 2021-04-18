import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PassengerforReservation {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    idReservation : number

    @Column()
    idPassenger : number
}
