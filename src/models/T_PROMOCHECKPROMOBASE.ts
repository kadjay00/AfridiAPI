import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMOCHECKPROMOBASE', {schema: 'dbo' } )
export class T_PROMOCHECKPROMOBASE {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'PCB_CHECKPROMOBASE_N',
        })
    public PCB_CHECKPROMOBASE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'PCB_DESCRIPNED_C',
        })
    public PCB_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'PCB_DESCRIPFRA_C',
        })
    public PCB_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PCB_FLAGDELETE_C',
        })
    public PCB_FLAGDELETE_C: string | null;

}
