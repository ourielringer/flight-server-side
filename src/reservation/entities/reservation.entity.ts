import { Ordering } from "src/ordering/entities/ordering.entity";
import { Passenger } from "src/passengers/entities/passenger.entity";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    numReservation : string

    @Column()
    idFlightGo : number

    @Column({default : null})
    idFlightBack : number

    @Column()
    idOrdering : number

}
