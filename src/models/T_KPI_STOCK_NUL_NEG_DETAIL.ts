import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_STOCK_NUL_NEG_DETAIL', {schema: 'dbo' } )
export class T_KPI_STOCK_NUL_NEG_DETAIL {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'KSD_DATE_DAT',
        })
    public KSD_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSD_MANAGER_N',
        })
    public KSD_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KSD_GROUP_C',
        })
    public KSD_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSD_ACTIVITY_N',
        })
    public KSD_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KSD_SUBDEPARTMENT_N',
        })
    public KSD_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KSD_SALESGROUP_C',
        })
    public KSD_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KSD_SALESFAMILY_C',
        })
    public KSD_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KSD_SALESSUBFAMILY_C',
        })
    public KSD_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KSD_PDCACTIVE_C',
        })
    public KSD_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KSD_CIRCUIT_C',
        })
    public KSD_CIRCUIT_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'KSD_IDGESTION_C',
        })
    public KSD_IDGESTION_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KSD_SUPPLIERID_C',
        })
    public KSD_SUPPLIERID_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KSD_STOCK_D',
        })
    public KSD_STOCK_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'KSD_CC1M_C',
        })
    public KSD_CC1M_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KSD_CC4M_C',
        })
    public KSD_CC4M_C: string | null;

}
