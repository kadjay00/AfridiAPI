import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_NORMALISEDSALES', {schema: 'dbo' } )
@Index('idx_nos_subdepartment', ['NOS_SUBDEPARTMENT_N'])
export class T_PDC_NORMALISEDSALES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'NOS_IDNUMBER_C',
        })
    public NOS_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'NOS_DATE_DAT',
        })
    public NOS_DATE_DAT: Date;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'NOS_CALENDARTYPE_C',
        })
    public NOS_CALENDARTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'NOS_GROUP_C',
        })
    public NOS_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'NOS_ACTIVITY_N',
        })
    public NOS_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NOS_SUBDEPARTMENT_N',
        })
    public NOS_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NOS_SALESGROUP_C',
        })
    public NOS_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NOS_SALESFAMILY_C',
        })
    public NOS_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'NOS_SALESSUBFAMILY_C',
        })
    public NOS_SALESSUBFAMILY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'NOS_DATATYPE_C',
        })
    public NOS_DATATYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'NOS_TOTALQTYREAL_N',
        })
    public NOS_TOTALQTYREAL_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'NOS_TOTALWEIGHTREAL_D',
        })
    public NOS_TOTALWEIGHTREAL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'NOS_QTYNORM_N',
        })
    public NOS_QTYNORM_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'NOS_WEIGHTNORM_D',
        })
    public NOS_WEIGHTNORM_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'NOS_TOTALSALESPV_D',
        })
    public NOS_TOTALSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'NOS_TOTALSALESPVEXTAX_D',
        })
    public NOS_TOTALSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'NOS_TOTALSALESPF_D',
        })
    public NOS_TOTALSALESPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'NOS_PROMOSALESPV_D',
        })
    public NOS_PROMOSALESPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'NOS_PROMOSALESPVEXTAX_D',
        })
    public NOS_PROMOSALESPVEXTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'NOS_PROMOSALESPF_D',
        })
    public NOS_PROMOSALESPF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'NOS_FLAG1_C',
        })
    public NOS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'NOS_FLAG2_C',
        })
    public NOS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'NOS_FLAG3_C',
        })
    public NOS_FLAG3_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'NOS_QTYPOEXCL_N',
        })
    public NOS_QTYPOEXCL_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'NOS_WEIGHTPOEXCL_D',
        })
    public NOS_WEIGHTPOEXCL_D: number | null;

}
