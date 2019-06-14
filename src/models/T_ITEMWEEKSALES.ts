import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMWEEKSALES', {schema: 'dbo' } )
@Index('idx_iws_subdepartment', ['IWS_SUBDEPARTMENT_N'])
@Index('IWS_IDNUMBER_C_DUP_IDX', ['IWS_IDNUMBER_C'])
export class T_ITEMWEEKSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IWS_CALENDARTYPE_C',
        })
    public IWS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IWS_YEAR_N',
        })
    public IWS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IWS_WEEKOFYEAR_N',
        })
    public IWS_WEEKOFYEAR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IWS_IDNUMBER_C',
        })
    public IWS_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IWS_DATATYPE_C',
        })
    public IWS_DATATYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'IWS_SUBDEPARTMENT_N',
        })
    public IWS_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: true,
        name: 'IWS_DEPARTMENT_N',
        })
    public IWS_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IWS_GIBREF_C',
        })
    public IWS_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IWS_TOTALSALESPV_D',
        })
    public IWS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IWS_TOTALSALESPVEXTAX_D',
        })
    public IWS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IWS_TOTALSALESPF_D',
        })
    public IWS_TOTALSALESPF_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IWS_TOTALSALESQTY_D',
        })
    public IWS_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IWS_TOTALSALESWEIGHT_D',
        })
    public IWS_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IWS_PRICECURRENCY_C',
        })
    public IWS_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IWS_DAYSSOLDCOUNT_N',
        })
    public IWS_DAYSSOLDCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IWS_FLAG1_C',
        })
    public IWS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IWS_FLAG2_C',
        })
    public IWS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IWS_FLAG3_C',
        })
    public IWS_FLAG3_C: string | null;

}
