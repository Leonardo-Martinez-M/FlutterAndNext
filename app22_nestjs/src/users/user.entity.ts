import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import{hash} from 'bcrypt';
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    lastname:string;

    @Column()
    email:string;

    @Column()
    phone:string;

    @Column()
    image:string;

    @Column()
    password:string;

    @Column({nullable:true})
    notificacion_token:string;

    @Column({type: 'datetime' ,default: ()=> 'CURRENT_TIMESTAMP'})
    created_at:Date;

    @Column({type: 'datetime' ,default: ()=> 'CURRENT_TIMESTAMP'})
    update_at:Date;

    @BeforeInsert()
    async hashPassword(){
        this.password = await hash(this.password,Number(process.env.HASH_SALT));
    }
}