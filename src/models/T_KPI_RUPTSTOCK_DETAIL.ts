import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_RUPTSTOCK_DETAIL', {schema: 'dbo' } )
export class T_KPI_RUPTSTOCK_DETAIL {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'KRD_DATE_DAT',
        })
    public KRD_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KRD_GROUP_C',
        })
    public KRD_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KRD_ACTIVITY_N',
        })
    public KRD_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KRD_SUBDEPARTMENT_N',
        })
    public KRD_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KRD_SALESGROUP_C',
        })
    public KRD_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KRD_SALESFAMILY_C',
        })
    public KRD_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KRD_SALESSUBFAMILY_C',
        })
    public KRD_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'KRD_IDNUMBER_C',
        })
    public KRD_IDNUMBER_C: string;

    @Column('char', {
        nullable: true,
        name: 'KRD_PDCACTIVE_C',
        })
    public KRD_PDCACTIVE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KRD_CIRCUIT_C',
        })
    public KRD_CIRCUIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'KRD_IDGESTION_C',
        })
    public KRD_IDGESTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'KRD_SUPPLIERID_C',
        })
    public KRD_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KRD_VARPROMO_C',
        })
    public KRD_VARPROMO_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'KRD_LASTSOLDEAN_N',
        })
    public KRD_LASTSOLDEAN_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KRD_LASTSALEDATE_DAT',
        })
    public KRD_LASTSALEDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'KRD_AVGSALES_N',
        })
    public KRD_AVGSALES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KRD_REALSALES_N',
        })
    public KRD_REALSALES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KRD_STOCK_D',
        })
    public KRD_STOCK_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'KRD_RL1M_C',
        })
    public KRD_RL1M_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KRD_RL2M_C',
        })
    public KRD_RL2M_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KRD_CC1M_C',
        })
    public KRD_CC1M_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KRD_CC4M_C',
        })
    public KRD_CC4M_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'KRD_SALESPRICE_D',
        })
    public KRD_SALESPRICE_D: number | null;

}
