import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_HIERARCHYMONTHSALES', {schema: 'dbo' } )
export class T_HIERARCHYMONTHSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'HMS_CALENDARTYPE_C',
        })
    public HMS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HMS_YEAR_N',
        })
    public HMS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HMS_MONTH_N',
        })
    public HMS_MONTH_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'HMS_GROUP_C',
        })
    public HMS_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HMS_ACTIVITY_N',
        })
    public HMS_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HMS_SUBDEPARTMENT_N',
        })
    public HMS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'HMS_SALESGROUP_C',
        })
    public HMS_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'HMS_SALESFAMILY_C',
        })
    public HMS_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'HMS_SALESSUBFAMILY_C',
        })
    public HMS_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'HMS_DATATYPE_C',
        })
    public HMS_DATATYPE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HMS_TOTALSALESPV_D',
        })
    public HMS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HMS_TOTALSALESPVEXTAX_D',
        })
    public HMS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'HMS_TOTALSALESPF_D',
        })
    public HMS_TOTALSALESPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HMS_PROMOSALESPV_D',
        })
    public HMS_PROMOSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'HMS_PROMOSALESPVEXTAX_D',
        })
    public HMS_PROMOSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'HMS_PROMOSALESPF_D',
        })
    public HMS_PROMOSALESPF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'HMS_PRICECURRENCY_C',
        })
    public HMS_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HMS_FLAG1_C',
        })
    public HMS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HMS_FLAG2_C',
        })
    public HMS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HMS_FLAG3_C',
        })
    public HMS_FLAG3_C: string | null;

}
