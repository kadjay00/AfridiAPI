import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_ITEM_CENTRAL', {schema: 'dbo' } )
export class T_KPI_ITEM_CENTRAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
       // scale:0,
        name: 'KPI_ID_N',
        })
    public KPI_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'KPI_STOREID_C',
        })
    public KPI_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'KPI_TYPE_C',
        })
    public KPI_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'KPI_YEAR_N',
        })
    public KPI_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPI_MONTH_N',
        })
    public KPI_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPI_WEEK_N',
        })
    public KPI_WEEK_N: number;

    @Column('varchar', {
        nullable: true,
        length: 24,
        name: 'KPI_GROUP_C',
        })
    public KPI_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPI_ACTIVITY_N',
        })
    public KPI_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPI_SUBDEPARTMENT_N',
        })
    public KPI_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPI_SALESGROUP_C',
        })
    public KPI_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPI_SALESFAMILY_C',
        })
    public KPI_SALESFAMILY_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'KPI_PDCACTIVE_C',
        })
    public KPI_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        name: 'KPI_CIRCUIT_C',
        })
    public KPI_CIRCUIT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'KPI_SUPPLIERID_C',
        })
    public KPI_SUPPLIERID_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'KPI_STOCK_D',
        })
    public KPI_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'KPI_AVGSTOCKVAL_D',
        })
    public KPI_AVGSTOCKVAL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'KPI_AVGSTOCKDAYS_D',
        })
    public KPI_AVGSTOCKDAYS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'KPI_SALESQTY_D',
        })
    public KPI_SALESQTY_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KPI_CREATE_DAT',
        })
    public KPI_CREATE_DAT: Date | null;

}
