import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMWEEKPROMOSALES', {schema: 'dbo' } )
@Index('idx_iwps_subdepartment', ['IPS_SUBDEPARTMENT_N'])
@Index('IPS_IDNUMBER_C_DUP_IDX', ['IPS_IDNUMBER_C'])
export class T_ITEMWEEKPROMOSALES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IPS_CALENDARTYPE_C',
        })
    public IPS_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IPS_YEAR_N',
        })
    public IPS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IPS_WEEKOFYEAR_N',
        })
    public IPS_WEEKOFYEAR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IPS_IDNUMBER_C',
        })
    public IPS_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IPS_DATATYPE_C',
        })
    public IPS_DATATYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'IPS_SUBDEPARTMENT_N',
        })
    public IPS_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: true,
        name: 'IPS_DEPARTMENT_N',
        })
    public IPS_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IPS_GIBREF_C',
        })
    public IPS_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IPS_TOTALSALESPV_D',
        })
    public IPS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IPS_TOTALSALESPVEXTAX_D',
        })
    public IPS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IPS_TOTALSALESPF_D',
        })
    public IPS_TOTALSALESPF_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IPS_TOTALSALESQTY_D',
        })
    public IPS_TOTALSALESQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IPS_TOTALSALESWEIGHT_D',
        })
    public IPS_TOTALSALESWEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IPS_PRICECURRENCY_C',
        })
    public IPS_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IPS_DAYSSOLDCOUNT_N',
        })
    public IPS_DAYSSOLDCOUNT_N: number | null;

    @Column('decimal', {
        nullable: false,
        primary: true,
        precision: 9,
        scale: 2,
        name: 'IPS_ACTIVESELLINGPRICE_D',
        })
    public IPS_ACTIVESELLINGPRICE_D: number;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IPS_ACTIVECOSTPRICE_D',
        })
    public IPS_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'IPS_TAXPERCENTAGE_D',
        })
    public IPS_TAXPERCENTAGE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IPS_FIRSTSELLINGDATE_DAT',
        })
    public IPS_FIRSTSELLINGDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IPS_LASTSELLINGDATE_DAT',
        })
    public IPS_LASTSELLINGDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IPS_FLAG1_C',
        })
    public IPS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IPS_FLAG2_C',
        })
    public IPS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IPS_FLAG3_C',
        })
    public IPS_FLAG3_C: string | null;

}
