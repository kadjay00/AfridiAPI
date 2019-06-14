import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMSALES', {schema: 'dbo' } )
@Index('idx_is_subdepartment', ['ITS_SUBDEPARTMENT_N'])
@Index('IDX_ITEMSALES01', ['ITS_IDNUMBER_C', 'ITS_DATE_DAT'])
@Index('ITS_IDNUMBER_C_DUP_IDX', ['ITS_IDNUMBER_C'])
export class T_ITEMSALES {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'ITS_DATE_DAT',
        })
    public ITS_DATE_DAT: Date;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'ITS_CALENDARTYPE_C',
        })
    public ITS_CALENDARTYPE_C: string;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 13,
        scale: 0,
        name: 'ITS_EANCODE_N',
        })
    public ITS_EANCODE_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'ITS_DATATYPE_C',
        })
    public ITS_DATATYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'ITS_PROMOID_C',
        })
    public ITS_PROMOID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ITS_IDNUMBER_C',
        })
    public ITS_IDNUMBER_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'ITS_YEAR_N',
        })
    public ITS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'ITS_WEEKOFYEAR_N',
        })
    public ITS_WEEKOFYEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'ITS_DAYOFWEEK_N',
        })
    public ITS_DAYOFWEEK_N: number;

    @Column('int', {
        nullable: false,
        name: 'ITS_DAYOFYEAR_N',
        })
    public ITS_DAYOFYEAR_N: number;

    @Column('int', {
        nullable: true,
        name: 'ITS_DEPARTMENT_N',
        })
    public ITS_DEPARTMENT_N: number | null;

    @Column('int', {
        nullable: false,
        name: 'ITS_SUBDEPARTMENT_N',
        })
    public ITS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ITS_GIBREF_C',
        })
    public ITS_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ITS_TOTALSALESPV_D',
        })
    public ITS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ITS_TOTALSALESPVEXTAX_D',
        })
    public ITS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ITS_TOTALSALESPF_D',
        })
    public ITS_TOTALSALESPF_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITS_TOTALSALESQTY_D',
        })
    public ITS_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ITS_TOTALSALESWEIGHT_D',
        })
    public ITS_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ITS_PRICECURRENCY_C',
        })
    public ITS_PRICECURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ITS_ACTIVESELLINGPRICE_D',
        })
    public ITS_ACTIVESELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ITS_ACTIVECOSTPRICE_D',
        })
    public ITS_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'ITS_TAXPERCENTAGE_D',
        })
    public ITS_TAXPERCENTAGE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITS_FLAG1_C',
        })
    public ITS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITS_FLAG2_C',
        })
    public ITS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITS_FLAG3_C',
        })
    public ITS_FLAG3_C: string | null;

}
