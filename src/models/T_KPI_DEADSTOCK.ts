import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_DEADSTOCK', {schema: 'dbo' } )
@Index('IDX_DSG_MONTH', ['KDS_MONTHYEAR_N', 'KDS_MONTH_N'])
@Index('IDX_DSG_WEEK', ['KDS_WEEKYEAR_N', 'KDS_WEEK_N'])
export class T_KPI_DEADSTOCK {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDS_MONTHYEAR_N',
        })
    public KDS_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDS_MONTH_N',
        })
    public KDS_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDS_WEEKYEAR_N',
        })
    public KDS_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDS_WEEK_N',
        })
    public KDS_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KDS_GROUP_C',
        })
    public KDS_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDS_ACTIVITY_N',
        })
    public KDS_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KDS_SUBDEPARTMENT_N',
        })
    public KDS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KDS_SALESGROUP_C',
        })
    public KDS_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KDS_SALESFAMILY_C',
        })
    public KDS_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KDS_SALESSUBFAMILY_C',
        })
    public KDS_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KDS_SUPPLIERID_C',
        })
    public KDS_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KDS_CIRCUIT_C',
        })
    public KDS_CIRCUIT_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'KDS_DATE_DAT',
        })
    public KDS_DATE_DAT: Date;

    @Column('int', {
        nullable: true,
        name: 'KDS_NUMSELECTED_N',
        })
    public KDS_NUMSELECTED_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KDS_SELSTOCKVALUE_D',
        })
    public KDS_SELSTOCKVALUE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'KDS_NUMDEADSTOCK_N',
        })
    public KDS_NUMDEADSTOCK_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KDS_DEADSTOCKVALUE_D',
        })
    public KDS_DEADSTOCKVALUE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'KDS_LASTDAYOFMONTH_C',
        })
    public KDS_LASTDAYOFMONTH_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KDS_LASTDAYOFWEEK_C',
        })
    public KDS_LASTDAYOFWEEK_C: string | null;

}
