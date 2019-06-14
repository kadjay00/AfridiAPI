import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LEVELWEEKSALES', {schema: 'dbo' } )
@Index('idx_lws_subdepartment', ['LWS_SUBDEPARTMENT_N'])
export class T_LEVELWEEKSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'LWS_CALENDARTYPE_C',
        })
    public LWS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LWS_YEAR_N',
        })
    public LWS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LWS_WEEKOFYEAR_N',
        })
    public LWS_WEEKOFYEAR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'LWS_GROUP_C',
        })
    public LWS_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LWS_ACTIVITY_N',
        })
    public LWS_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LWS_SUBDEPARTMENT_N',
        })
    public LWS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LWS_SALESGROUP_C',
        })
    public LWS_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LWS_SALESFAMILY_C',
        })
    public LWS_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LWS_SALESSUBFAMILY_C',
        })
    public LWS_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'LWS_DATATYPE_C',
        })
    public LWS_DATATYPE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'LWS_TOTALSALESPV_D',
        })
    public LWS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'LWS_TOTALSALESPVEXTAX_D',
        })
    public LWS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'LWS_TOTALSALESPF_D',
        })
    public LWS_TOTALSALESPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 0,
        name: 'LWS_TOTALSALESQTY_D',
        })
    public LWS_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'LWS_TOTALSALESWEIGHT_D',
        })
    public LWS_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LWS_PRICECURRENCY_C',
        })
    public LWS_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LWS_DAYSSOLDCOUNT_N',
        })
    public LWS_DAYSSOLDCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LWS_FLAG1_C',
        })
    public LWS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LWS_FLAG2_C',
        })
    public LWS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LWS_FLAG3_C',
        })
    public LWS_FLAG3_C: string | null;

}
