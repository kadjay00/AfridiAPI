import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_STOCK_NUL_NEG', {schema: 'dbo' } )
export class T_KPI_STOCK_NUL_NEG {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_MONTHYEAR_N',
        })
    public KSN_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_MONTH_N',
        })
    public KSN_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_WEEKYEAR_N',
        })
    public KSN_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_WEEK_N',
        })
    public KSN_WEEK_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_MANAGER_N',
        })
    public KSN_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KSN_GROUP_C',
        })
    public KSN_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_ACTIVITY_N',
        })
    public KSN_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSN_SUBDEPARTMENT_N',
        })
    public KSN_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KSN_SALESGROUP_C',
        })
    public KSN_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KSN_SALESFAMILY_C',
        })
    public KSN_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KSN_SALESSUBFAMILY_C',
        })
    public KSN_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KSN_SUPPLIERID_C',
        })
    public KSN_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KSN_PDCACTIVE_C',
        })
    public KSN_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KSN_CIRCUIT_C',
        })
    public KSN_CIRCUIT_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'KSN_IDGESTION_C',
        })
    public KSN_IDGESTION_C: string;

    @Column('int', {
        nullable: true,
        name: 'KSN_CC1M_N',
        })
    public KSN_CC1M_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KSN_CC4M_N',
        })
    public KSN_CC4M_N: number | null;

}
