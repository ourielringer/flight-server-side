import { Reservation } from "src/reservation/entities/reservation.entity"
import { Column, Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Ticket extends BaseEntity{

    @Column()
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    numOfFlight:number

    @Column()
    from:string

    @Column()
    fromhour:string

    @Column()
    to:string

    @Column()
    tohour:string

    @Column()
    date:string

    @Column()
    price:number

    @Column()
    companyName:string

    @Column()
    numplaces:number
}
