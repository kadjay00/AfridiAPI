import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_TICKETDETAIL', {schema: 'dbo' } )
export class T_BALANCE_TICKETDETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BTD_TICKETNUMBER_N',
        })
    public BTD_TICKETNUMBER_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'BTD_TICKETTIME_DAT',
        })
    public BTD_TICKETTIME_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BTD_SEQUENCE_N',
        })
    public BTD_SEQUENCE_N: number;

    @Column('int', {
        nullable: false,
        name: 'BTD_PLU_N',
        })
    public BTD_PLU_N: number;

    @Column('char', {
        nullable: false,
        name: 'BTD_LOCAL_C',
        })
    public BTD_LOCAL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'BTD_UNIT_C',
        })
    public BTD_UNIT_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 6,
        scale: 2,
        name: 'BTD_UNITPRICE_N',
        })
    public BTD_UNITPRICE_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 6,
        scale: 3,
        name: 'BTD_WEIGHT_N',
        })
    public BTD_WEIGHT_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 6,
        scale: 2,
        name: 'BTD_PRICE_N',
        })
    public BTD_PRICE_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'BTD_TIME_DAT',
        })
    public BTD_TIME_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'BTD_SUBDEPARTMENT_N',
        })
    public BTD_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'BTD_LOTNUMBER_C',
        })
    public BTD_LOTNUMBER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'BTD_LOTDO_DAT',
        })
    public BTD_LOTDO_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 3,
        name: 'BTD_LOTCURRENT_N',
        })
    public BTD_LOTCURRENT_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'BTD_SALESDLC_DAT',
        })
    public BTD_SALESDLC_DAT: Date | null;

}
