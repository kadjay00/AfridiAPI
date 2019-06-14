import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_STOCK_NUL_NEG_CENTRAL', {schema: 'dbo' } )
export class T_KPI_STOCK_NUL_NEG_CENTRAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KSN_ID_N',
        })
    public KSN_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'KSN_STOREID_C',
        })
    public KSN_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'KSN_TYPE_C',
        })
    public KSN_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'KSN_YEAR_N',
        })
    public KSN_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_MONTH_N',
        })
    public KSN_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_WEEK_N',
        })
    public KSN_WEEK_N: number;

    @Column('int', {
        nullable: false,
        name: 'KSN_MANAGER_N',
        })
    public KSN_MANAGER_N: number;

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

    @Column('varchar', {
        nullable: false,
        length: 13,
        name: 'KSN_SUPPLIERID_C',
        })
    public KSN_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        name: 'KSN_PDCACTIVE_C',
        })
    public KSN_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        name: 'KSN_CIRCUIT_C',
        })
    public KSN_CIRCUIT_C: string;

    @Column('int', {
        nullable: false,
        name: 'KSN_ITEMS_N',
        })
    public KSN_ITEMS_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'KSN_CREATE_DAT',
        })
    public KSN_CREATE_DAT: Date;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KSN_CHECKED_N',
        })
    public KSN_CHECKED_N: number | null;

}
