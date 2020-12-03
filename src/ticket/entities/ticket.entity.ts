import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

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

    // @Column()
    // numFreeplaces:number
    
}
// constructor(public numOfFlight:string,public from:string, public fromhour:string, public to:string, 
//     public tohour:string, public date:string, public price:string, public companyName:string,
//     public numplaces:string ){}

//     public numFreeplaces:string = this.numplaces