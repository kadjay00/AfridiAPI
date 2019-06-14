import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_DEADSTOCK_CENTRAL', {schema: 'dbo' } )
export class T_KPI_DEADSTOCK_CENTRAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KDD_ID_N',
        })
    public KDD_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'KDD_STOREID_C',
        })
    public KDD_STOREID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KDD_TYPE_C',
        })
    public KDD_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_YEAR_N',
        })
    public KDD_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_MONTH_N',
        })
    public KDD_MONTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_WEEK_N',
        })
    public KDD_WEEK_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KDD_GROUP_C',
        })
    public KDD_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_ACTIVITY_N',
        })
    public KDD_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_SUBDEPARTMENT_N',
        })
    public KDD_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KDD_SALESGROUP_C',
        })
    public KDD_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KDD_SALESFAMILY_C',
        })
    public KDD_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KDD_SALESSUBFAMILY_C',
        })
    public KDD_SALESSUBFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'KDD_SUPPLIERID_C',
        })
    public KDD_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KDD_CIRCUIT_C',
        })
    public KDD_CIRCUIT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_NUMDEADSTOCK_N',
        })
    public KDD_NUMDEADSTOCK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KDD_NUMSELECTED_N',
        })
    public KDD_NUMSELECTED_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'KDD_PERCDEADSTOCK_D',
        })
    public KDD_PERCDEADSTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KDD_VALDEADSTOCK_D',
        })
    public KDD_VALDEADSTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KDD_VALSELECTED_D',
        })
    public KDD_VALSELECTED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'KDD_PERCVALDEADSTOCK_D',
        })
    public KDD_PERCVALDEADSTOCK_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KDD_CREATE_DAT',
        })
    public KDD_CREATE_DAT: Date | null;

}
