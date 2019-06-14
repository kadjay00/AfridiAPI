import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_NOMENCLATURE_NEW', {schema: 'dbo' } )
export class T_KPI_NOMENCLATURE_NEW {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'KPN_DATE_DAT',
        })
    public KPN_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KPN_GROUP_C',
        })
    public KPN_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPN_ACTIVITY_N',
        })
    public KPN_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPN_SUBDEPARTMENT_N',
        })
    public KPN_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPN_SALESGROUP_C',
        })
    public KPN_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPN_SALESFAMILY_C',
        })
    public KPN_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPN_SALESSUBFAMILY_C',
        })
    public KPN_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KPN_SUPPLIERID_C',
        })
    public KPN_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KPN_PDCACTIVE_C',
        })
    public KPN_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KPN_CIRCUIT_C',
        })
    public KPN_CIRCUIT_C: string;

    @Column('int', {
        nullable: true,
        name: 'KPN_MONTHYEAR_N',
        })
    public KPN_MONTHYEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_MONTH_N',
        })
    public KPN_MONTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_WEEKYEAR_N',
        })
    public KPN_WEEKYEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_WEEK_N',
        })
    public KPN_WEEK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_NUMGESTCHECKED_N',
        })
    public KPN_NUMGESTCHECKED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_NUMGESTACTIVE_N',
        })
    public KPN_NUMGESTACTIVE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_NUMVARPROMOCHECKED_N',
        })
    public KPN_NUMVARPROMOCHECKED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPN_NUMVARPROMOACTIVE_N',
        })
    public KPN_NUMVARPROMOACTIVE_N: number | null;

}
