import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_ITEM_DETAIL', {schema: 'dbo' } )
@Index('IX_T_KPI_ITEM_DETAIL_YEARMONTH', ['KPD_ACTIVITY_N', 'KPD_GROUP_C', 'KPD_SUBDEPARTMENT_N', 'KPD_SALESGROUP_C', 'KPD_SALESFAMILY_C', 'KPD_SALESSUBFAMILY_C', 'KPD_IDGESTION_C', 'KPD_YEAR_N', 'KPD_MONTH_N'])
export class T_KPI_ITEM_DETAIL {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'KPD_DATE_DAT',
        })
    public KPD_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KPD_GROUP_C',
        })
    public KPD_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPD_ACTIVITY_N',
        })
    public KPD_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPD_SUBDEPARTMENT_N',
        })
    public KPD_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPD_SALESGROUP_C',
        })
    public KPD_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPD_SALESFAMILY_C',
        })
    public KPD_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPD_SALESSUBFAMILY_C',
        })
    public KPD_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'KPD_IDGESTION_C',
        })
    public KPD_IDGESTION_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KPD_SALESQTY_D',
        })
    public KPD_SALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KPD_STOCK_D',
        })
    public KPD_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KPD_COSTPRICE_D',
        })
    public KPD_COSTPRICE_D: number | null;

    @Column('int', {
        nullable: false,
        name: 'KPD_YEAR_N',
        })
    public KPD_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPD_MONTH_N',
        })
    public KPD_MONTH_N: number;

    @Column('char', {
        nullable: true,
        name: 'KPD_FLAG1_C',
        })
    public KPD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KPD_FLAG2_C',
        })
    public KPD_FLAG2_C: string | null;

}
