import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LEVELMONTHSALES', {schema: 'dbo' } )
@Index('idx_lms_subdepartment', ['LMS_SUBDEPARTMENT_N'])
export class T_LEVELMONTHSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'LMS_CALENDARTYPE_C',
        })
    public LMS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LMS_YEAR_N',
        })
    public LMS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LMS_MONTH_N',
        })
    public LMS_MONTH_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'LMS_GROUP_C',
        })
    public LMS_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LMS_ACTIVITY_N',
        })
    public LMS_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LMS_SUBDEPARTMENT_N',
        })
    public LMS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LMS_SALESGROUP_C',
        })
    public LMS_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LMS_SALESFAMILY_C',
        })
    public LMS_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LMS_SALESSUBFAMILY_C',
        })
    public LMS_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'LMS_DATATYPE_C',
        })
    public LMS_DATATYPE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'LMS_TOTALSALESPV_D',
        })
    public LMS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'LMS_TOTALSALESPVEXTAX_D',
        })
    public LMS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'LMS_TOTALSALESPF_D',
        })
    public LMS_TOTALSALESPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 0,
        name: 'LMS_TOTALSALESQTY_D',
        })
    public LMS_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'LMS_TOTALSALESWEIGHT_D',
        })
    public LMS_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LMS_PRICECURRENCY_C',
        })
    public LMS_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LMS_DAYSSOLDCOUNT_N',
        })
    public LMS_DAYSSOLDCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LMS_FLAG1_C',
        })
    public LMS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LMS_FLAG2_C',
        })
    public LMS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LMS_FLAG3_C',
        })
    public LMS_FLAG3_C: string | null;

}
