import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_STOCK_NUL_NEG_NOMENCL', {schema: 'dbo' } )
@Index('IDX_KPI_STOCK_NUL_NEG_NOMENCL_SUM', ['KCL_WEEKYEAR_N', 'KCL_WEEK_N', 'KCL_GROUP_C', 'KCL_ACTIVITY_N', 'KCL_SUBDEPARTMENT_N', 'KCL_PDCACTIVE_C', 'KCL_CIRCUIT_C', 'KCL_SUPPLIERID_C'])
export class T_KPI_STOCK_NUL_NEG_NOMENCL {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'KCL_DATE_DAT',
        })
    public KCL_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KCL_MANAGER_N',
        })
    public KCL_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KCL_GROUP_C',
        })
    public KCL_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KCL_ACTIVITY_N',
        })
    public KCL_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KCL_SUBDEPARTMENT_N',
        })
    public KCL_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KCL_SALESGROUP_C',
        })
    public KCL_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KCL_SALESFAMILY_C',
        })
    public KCL_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KCL_SALESSUBFAMILY_C',
        })
    public KCL_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KCL_PDCACTIVE_C',
        })
    public KCL_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KCL_CIRCUIT_C',
        })
    public KCL_CIRCUIT_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KCL_SUPPLIERID_C',
        })
    public KCL_SUPPLIERID_C: string;

    @Column('int', {
        nullable: true,
        name: 'KCL_MONTHYEAR_N',
        })
    public KCL_MONTHYEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KCL_MONTH_N',
        })
    public KCL_MONTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KCL_WEEKYEAR_N',
        })
    public KCL_WEEKYEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KCL_WEEK_N',
        })
    public KCL_WEEK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KCL_NUMGESTCHECKED_N',
        })
    public KCL_NUMGESTCHECKED_N: number | null;

}
