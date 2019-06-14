import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_RUPTSTOCK_REGR', {schema: 'dbo' } )
export class T_KPI_RUPTSTOCK_REGR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KPR_KEY_N',
        })
    public KPR_KEY_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPR_LEVEL_N',
        })
    public KPR_LEVEL_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPR_YEAR_N',
        })
    public KPR_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPR_MONTH_N',
        })
    public KPR_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPR_WEEK_N',
        })
    public KPR_WEEK_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KPR_GROUP_C',
        })
    public KPR_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_ACTIVITY_N',
        })
    public KPR_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_SUBDEPARTMENT_N',
        })
    public KPR_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPR_SALESGROUP_C',
        })
    public KPR_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPR_SALESFAMILY_C',
        })
    public KPR_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPR_SALESSUBFAMILY_C',
        })
    public KPR_SALESSUBFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'KPR_IDNUMBER_C',
        })
    public KPR_IDNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KPR_PDCACTIVE_C',
        })
    public KPR_PDCACTIVE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KPR_CIRCUIT_C',
        })
    public KPR_CIRCUIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'KPR_IDGESTION_C',
        })
    public KPR_IDGESTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'KPR_SUPPLIERID_C',
        })
    public KPR_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KPR_VARPROMO_C',
        })
    public KPR_VARPROMO_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_AVGSALES_N',
        })
    public KPR_AVGSALES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_REALSALES_N',
        })
    public KPR_REALSALES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KPR_STOCK_D',
        })
    public KPR_STOCK_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_RL1M_N',
        })
    public KPR_RL1M_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_RL2M_N',
        })
    public KPR_RL2M_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_CC1M_N',
        })
    public KPR_CC1M_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_CC4M_N',
        })
    public KPR_CC4M_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'KPR_SALESPRICE_D',
        })
    public KPR_SALESPRICE_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KPR_NBRREF_N',
        })
    public KPR_NBRREF_N: number | null;

}
