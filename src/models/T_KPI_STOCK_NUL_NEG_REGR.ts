import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_STOCK_NUL_NEG_REGR', {schema: 'dbo' } )
export class T_KPI_STOCK_NUL_NEG_REGR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KSN_KEY_N',
        })
    public KSN_KEY_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_LEVEL_N',
        })
    public KSN_LEVEL_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_MONTHYEAR_N',
        })
    public KSN_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_MONTH_N',
        })
    public KSN_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_WEEKYEAR_N',
        })
    public KSN_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_WEEK_N',
        })
    public KSN_WEEK_N: number;

    @Column('int', {
        nullable: true,
        name: 'KSN_MANAGER_N',
        })
    public KSN_MANAGER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KSN_GROUP_C',
        })
    public KSN_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KSN_ACTIVITY_N',
        })
    public KSN_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KSN_SUBDEPARTMENT_N',
        })
    public KSN_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KSN_SALESGROUP_C',
        })
    public KSN_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KSN_SALESFAMILY_C',
        })
    public KSN_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KSN_SALESSUBFAMILY_C',
        })
    public KSN_SALESSUBFAMILY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KSN_CIRCUIT_C',
        })
    public KSN_CIRCUIT_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 4,
        name: 'KSN_CC1M_N',
        })
    public KSN_CC1M_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 4,
        name: 'KSN_CC4M_N',
        })
    public KSN_CC4M_N: number | null;

}
