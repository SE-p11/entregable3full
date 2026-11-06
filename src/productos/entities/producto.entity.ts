import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar', length:100, unique:true})
    nombre:string;
    @Column({type:'text', nullable:true})
    descripcion:string|null;
    @Column({type:'numeric', precision:10, scale:2,
        transformer:{
            to:(valor:number)=>valor,
            from:(valor:string)=>Number(valor),
        }
    })
    precio:number;

    @Column({type:'int',default:0})
    stock:number;

    @Column({type:'boolean', default:true})
    activo:boolean;

    @CreateDateColumn({name:'creado_en'})
    createEn:Date;

    @CreateDateColumn({name:'modificado_en'})
    upxdateEn:Date;
}
