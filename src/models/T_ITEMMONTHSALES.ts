import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMMONTHSALES', {schema: 'dbo' } )
@Index('idx_ims_subdepartment', ['IMS_SUBDEPARTMENT_N'])
@Index('IMS_IDNUMBER_C_DUP_IDX', ['IMS_IDNUMBER_C'])
export class T_ITEMMONTHSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IMS_CALENDARTYPE_C',
        })
    public IMS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IMS_YEAR_N',
        })
    public IMS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IMS_MONTH_N',
        })
    public IMS_MONTH_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IMS_IDNUMBER_C',
        })
    public IMS_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IMS_DATATYPE_C',
        })
    public IMS_DATATYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'IMS_SUBDEPARTMENT_N',
        })
    public IMS_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: true,
        name: 'IMS_DEPARTMENT_N',
        })
    public IMS_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IMS_GIBREF_C',
        })
    public IMS_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMS_TOTALSALESPV_D',
        })
    public IMS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMS_TOTALSALESPVEXTAX_D',
        })
    public IMS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IMS_TOTALSALESPF_D',
        })
    public IMS_TOTALSALESPF_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IMS_TOTALSALESQTY_D',
        })
    public IMS_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMS_TOTALSALESWEIGHT_D',
        })
    public IMS_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IMS_PRICECURRENCY_C',
        })
    public IMS_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IMS_DAYSSOLDCOUNT_N',
        })
    public IMS_DAYSSOLDCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IMS_FLAG1_C',
        })
    public IMS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMS_FLAG2_C',
        })
    public IMS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMS_FLAG3_C',
        })
    public IMS_FLAG3_C: string | null;

}
