import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_DEADSTOCK_DETAIL', {schema: 'dbo' } )
@Index('IDX_KDS_NOMENCLATURE', ['KDD_GROUP_C', 'KDD_ACTIVITY_N', 'KDD_SUBDEPARTMENT_N', 'KDD_SALESGROUP_C', 'KDD_SALESFAMILY_C', 'KDD_SALESSUBFAMILY_C', 'KDD_SUPPLIERID_C', 'KDD_CIRCUIT_C'])
export class T_KPI_DEADSTOCK_DETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDD_MONTHYEAR_N',
        })
    public KDD_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDD_MONTH_N',
        })
    public KDD_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDD_WEEKYEAR_N',
        })
    public KDD_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDD_WEEK_N',
        })
    public KDD_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'KDD_IDNUMBER_C',
        })
    public KDD_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'KDD_DATE_DAT',
        })
    public KDD_DATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'KDD_LASTDAYOFMONTH_C',
        })
    public KDD_LASTDAYOFMONTH_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KDD_LASTDAYOFWEEK_C',
        })
    public KDD_LASTDAYOFWEEK_C: string | null;

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

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'KDD_LASTSOLDEAN_N',
        })
    public KDD_LASTSOLDEAN_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KDD_LASTSALEDATE_DAT',
        })
    public KDD_LASTSALEDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'KDD_FINALSTOCK_D',
        })
    public KDD_FINALSTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KDD_FINALSTOCKVALUE_D',
        })
    public KDD_FINALSTOCKVALUE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KDD_LASTRECEPTION_DAT',
        })
    public KDD_LASTRECEPTION_DAT: Date | null;

}
