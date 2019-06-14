import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('t_kpi_pdc_regr', {schema: 'dbo' } )
export class t_kpi_pdc_regr {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KPP_KEY_N',
        })
    public KPP_KEY_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPP_LEVEL_N',
        })
    public KPP_LEVEL_N: number;

    @Column('int', {
        nullable: true,
        name: 'KPP_YEAR_N',
        })
    public KPP_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPP_MONTH_N',
        })
    public KPP_MONTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPP_WEEK_N',
        })
    public KPP_WEEK_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KPP_GROUP_C',
        })
    public KPP_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPP_ACTIVITY_N',
        })
    public KPP_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPP_SUBDEPARTMENT_N',
        })
    public KPP_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPP_SALESFAMILY_C',
        })
    public KPP_SALESFAMILY_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'KPP_PCT1_N',
        })
    public KPP_PCT1_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'KPP_PCT2_N',
        })
    public KPP_PCT2_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'kpp_manager_n',
        })
    public kpp_manager_n: number | null;

}
