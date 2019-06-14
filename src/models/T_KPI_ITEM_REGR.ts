import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_ITEM_REGR', {schema: 'dbo' } )
export class T_KPI_ITEM_REGR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KPI_KEY_N',
        })
    public KPI_KEY_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPI_LEVEL_N',
        })
    public KPI_LEVEL_N: number;

    @Column('int', {
        nullable: true,
        name: 'KPI_YEAR_N',
        })
    public KPI_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPI_MONTH_N',
        })
    public KPI_MONTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPI_WEEK_N',
        })
    public KPI_WEEK_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
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
        name: 'KPI_SALESFAMILY_C',
        })
    public KPI_SALESFAMILY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KPI_PDCACTIVE_C',
        })
    public KPI_PDCACTIVE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KPI_SALESQTY_D',
        })
    public KPI_SALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KPI_STOCK_D',
        })
    public KPI_STOCK_D: number | null;

}
