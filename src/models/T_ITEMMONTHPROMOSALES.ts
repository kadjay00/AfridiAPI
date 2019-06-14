import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMMONTHPROMOSALES', {schema: 'dbo' } )
@Index('idx_imps_subdepartment', ['IMP_SUBDEPARTMENT_N'])
@Index('IMP_IDNUMBER_C_DUP_IDX', ['IMP_IDNUMBER_C'])
export class T_ITEMMONTHPROMOSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IMP_CALENDARTYPE_C',
        })
    public IMP_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IMP_YEAR_N',
        })
    public IMP_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IMP_MONTH_N',
        })
    public IMP_MONTH_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IMP_IDNUMBER_C',
        })
    public IMP_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IMP_DATATYPE_C',
        })
    public IMP_DATATYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'IMP_SUBDEPARTMENT_N',
        })
    public IMP_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: true,
        name: 'IMP_DEPARTMENT_N',
        })
    public IMP_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IMP_GIBREF_C',
        })
    public IMP_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMP_TOTALSALESPV_D',
        })
    public IMP_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMP_TOTALSALESPVEXTAX_D',
        })
    public IMP_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IMP_TOTALSALESPF_D',
        })
    public IMP_TOTALSALESPF_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IMP_TOTALSALESQTY_D',
        })
    public IMP_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMP_TOTALSALESWEIGHT_D',
        })
    public IMP_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IMP_PRICECURRENCY_C',
        })
    public IMP_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IMP_DAYSSOLDCOUNT_N',
        })
    public IMP_DAYSSOLDCOUNT_N: number | null;

    @Column('decimal', {
        nullable: false,
        primary: true,
        precision: 9,
        scale: 2,
        name: 'IMP_ACTIVESELLINGPRICE_D',
        })
    public IMP_ACTIVESELLINGPRICE_D: number;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IMP_ACTIVECOSTPRICE_D',
        })
    public IMP_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'IMP_TAXPERCENTAGE_D',
        })
    public IMP_TAXPERCENTAGE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IMP_FIRSTSELLINGDATE_DAT',
        })
    public IMP_FIRSTSELLINGDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IMP_LASTSELLINGDATE_DAT',
        })
    public IMP_LASTSELLINGDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IMP_FLAG1_C',
        })
    public IMP_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMP_FLAG2_C',
        })
    public IMP_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMP_FLAG3_C',
        })
    public IMP_FLAG3_C: string | null;

}
