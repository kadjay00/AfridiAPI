import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_COUNTER', {schema: 'dbo' } )
export class T_STAFF_COUNTER {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SCP_STAFFID_N',
        })
    public SCP_STAFFID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SCP_COUNTER_C',
        })
    public SCP_COUNTER_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'SCP_NBRHOUR_N',
        })
    public SCP_NBRHOUR_N: number | null;

}
