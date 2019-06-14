import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTROSUP_ASSORT', {schema: 'dbo' } )
export class T_INTROSUP_ASSORT {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'INA_FAMASSORT_C',
        })
    public INA_FAMASSORT_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'INA_ITEMASSORT_C',
        })
    public INA_ITEMASSORT_C: string;

}
