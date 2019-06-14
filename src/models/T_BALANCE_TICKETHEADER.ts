import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_TICKETHEADER', {schema: 'dbo' } )
export class T_BALANCE_TICKETHEADER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BTH_NUMBER_N',
        })
    public BTH_NUMBER_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'BTH_TIME_DAT',
        })
    public BTH_TIME_DAT: Date;

    @Column('numeric', {
        nullable: false,
        precision: 13,
        scale: 0,
        name: 'BTH_EAN_N',
        })
    public BTH_EAN_N: number;

    @Column('int', {
        nullable: false,
        name: 'BTH_SCALEGROUP_N',
        })
    public BTH_SCALEGROUP_N: number;

    @Column('int', {
        nullable: false,
        name: 'BTH_SCALENUMBER_N',
        })
    public BTH_SCALENUMBER_N: number;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'BTH_OPERATOR_C',
        })
    public BTH_OPERATOR_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'BTH_SIZE_N',
        })
    public BTH_SIZE_N: number;

    @Column('char', {
        nullable: false,
        name: 'BTH_STATUS_C',
        })
    public BTH_STATUS_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'bth_amount_n',
        })
    public bth_amount_n: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'bth_origin_c',
        })
    public bth_origin_c: string | null;

    @Column('int', {
        nullable: true,
        name: 'BTH_DOCNUMBER_N',
        })
    public BTH_DOCNUMBER_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'BTH_DOCTYPE_C',
        })
    public BTH_DOCTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BTH_EXPORTDWH_C',
        })
    public BTH_EXPORTDWH_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BTH_STOCKFLAG_C',
        })
    public BTH_STOCKFLAG_C: string | null;

}
