import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_HIERARCHYWEEKSALES', {schema: 'dbo' } )
export class T_HIERARCHYWEEKSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'HWS_CALENDARTYPE_C',
        })
    public HWS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HWS_YEAR_N',
        })
    public HWS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HWS_WEEKOFYEAR_N',
        })
    public HWS_WEEKOFYEAR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'HWS_GROUP_C',
        })
    public HWS_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HWS_ACTIVITY_N',
        })
    public HWS_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HWS_SUBDEPARTMENT_N',
        })
    public HWS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'HWS_SALESGROUP_C',
        })
    public HWS_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'HWS_SALESFAMILY_C',
        })
    public HWS_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'HWS_SALESSUBFAMILY_C',
        })
    public HWS_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'HWS_DATATYPE_C',
        })
    public HWS_DATATYPE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HWS_TOTALSALESPV_D',
        })
    public HWS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HWS_TOTALSALESPVEXTAX_D',
        })
    public HWS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'HWS_TOTALSALESPF_D',
        })
    public HWS_TOTALSALESPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HWS_PROMOSALESPV_D',
        })
    public HWS_PROMOSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HWS_PROMOSALESPVEXTAX_D',
        })
    public HWS_PROMOSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'HWS_PROMOSALESPF_D',
        })
    public HWS_PROMOSALESPF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'HWS_PRICECURRENCY_C',
        })
    public HWS_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HWS_FLAG1_C',
        })
    public HWS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HWS_FLAG2_C',
        })
    public HWS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HWS_FLAG3_C',
        })
    public HWS_FLAG3_C: string | null;

}
