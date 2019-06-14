import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_TIMESLICE', {schema: 'dbo' } )
export class T_POS_TIMESLICE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TSL_SLICEID_N',
        })
    public TSL_SLICEID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'TSL_FROM_C',
        })
    public TSL_FROM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'TSL_TO_C',
        })
    public TSL_TO_C: string | null;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'TSL_STARTDATE_DAT',
        })
    public TSL_STARTDATE_DAT: Date;

}
