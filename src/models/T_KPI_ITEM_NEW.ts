import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_ITEM_NEW', {schema: 'dbo' } )
export class T_KPI_ITEM_NEW {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPI_MONTHYEAR_N',
        })
    public KPI_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPI_MONTH_N',
        })
    public KPI_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPI_WEEKYEAR_N',
        })
    public KPI_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPI_WEEK_N',
        })
    public KPI_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KPI_GROUP_C',
        })
    public KPI_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPI_ACTIVITY_N',
        })
    public KPI_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPI_SUBDEPARTMENT_N',
        })
    public KPI_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPI_SALESGROUP_C',
        })
    public KPI_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPI_SALESFAMILY_C',
        })
    public KPI_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPI_SALESSUBFAMILY_C',
        })
    public KPI_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'KPI_IDNUMBER_C',
        })
    public KPI_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KPI_SUPPLIERID_C',
        })
    public KPI_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KPI_PDCACTIVE_C',
        })
    public KPI_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KPI_CIRCUIT_C',
        })
    public KPI_CIRCUIT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'KPI_IDGESTION_C',
        })
    public KPI_IDGESTION_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KPI_SALESQTY_D',
        })
    public KPI_SALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KPI_STOCK_D',
        })
    public KPI_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KPI_PAMOYPOND_D',
        })
    public KPI_PAMOYPOND_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'KPI_FLAG1_C',
        })
    public KPI_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KPI_FLAG2_C',
        })
    public KPI_FLAG2_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPI_DAYS_N',
        })
    public KPI_DAYS_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'KPI_ACTIVECOSTPRICE_D',
        })
    public KPI_ACTIVECOSTPRICE_D: number | null;

}
