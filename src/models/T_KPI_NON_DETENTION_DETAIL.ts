import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_NON_DETENTION_DETAIL', {schema: 'dbo' } )
export class T_KPI_NON_DETENTION_DETAIL {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'NDD_YEAR_N',
        })
    public NDD_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'NDD_MONTH_N',
        })
    public NDD_MONTH_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'NDD_IDNUMBER_C',
        })
    public NDD_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'NDD_GROUP_C',
        })
    public NDD_GROUP_C: string;

    @Column('int', {
        nullable: false,
        name: 'NDD_ACTIVITY_N',
        })
    public NDD_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        name: 'NDD_SUBDEPARTMENT_N',
        })
    public NDD_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NDD_SALESGROUP_C',
        })
    public NDD_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NDD_SALESFAMILY_C',
        })
    public NDD_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NDD_SALESSUBFAMILY_C',
        })
    public NDD_SALESSUBFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'NDD_DELIVERYCODE_C',
        })
    public NDD_DELIVERYCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'NDD_BRAND_C',
        })
    public NDD_BRAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NDD_LOGISTICGROUP_C',
        })
    public NDD_LOGISTICGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'NDD_SUPPLIERID_C',
        })
    public NDD_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'NDD_PDCSTATE_C',
        })
    public NDD_PDCSTATE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'NDD_COEFFVARLOCART_D',
        })
    public NDD_COEFFVARLOCART_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'NDD_CANBEORDERED_C',
        })
    public NDD_CANBEORDERED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDD_LASTORDER_DAT',
        })
    public NDD_LASTORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDD_LASTRECEPTION_DAT',
        })
    public NDD_LASTRECEPTION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDD_LASTSALES_DAT',
        })
    public NDD_LASTSALES_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'NDD_PLAN_ID_C',
        })
    public NDD_PLAN_ID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'NDD_PLAN_CODE_C',
        })
    public NDD_PLAN_CODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDD_PLAN_START_DAT',
        })
    public NDD_PLAN_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDD_PLAN_END_DAT',
        })
    public NDD_PLAN_END_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'NDD_IDGESTION_C',
        })
    public NDD_IDGESTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'NDD_IDCOMMANDE_C',
        })
    public NDD_IDCOMMANDE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'NDD_ORIGIN_C',
        })
    public NDD_ORIGIN_C: string | null;

}
