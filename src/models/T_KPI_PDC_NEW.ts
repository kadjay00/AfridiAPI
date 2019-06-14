import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_PDC_NEW', {schema: 'dbo' } )
export class T_KPI_PDC_NEW {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_MONTHYEAR_N',
        })
    public KPP_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_MONTH_N',
        })
    public KPP_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_WEEKYEAR_N',
        })
    public KPP_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_WEEK_N',
        })
    public KPP_WEEK_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_MANAGER_N',
        })
    public KPP_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KPP_GROUP_C',
        })
    public KPP_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_ACTIVITY_N',
        })
    public KPP_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPP_SUBDEPARTMENT_N',
        })
    public KPP_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPP_SALESGROUP_C',
        })
    public KPP_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPP_SALESFAMILY_C',
        })
    public KPP_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'KPP_SALESSUBFAMILY_C',
        })
    public KPP_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KPP_SUPPLIERID_C',
        })
    public KPP_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'KPP_CIRCUIT_C',
        })
    public KPP_CIRCUIT_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTINITQTYORDGR0_N',
        })
    public KPP_TOTINITQTYORDGR0_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTMODINITQTYORDGR0_N',
        })
    public KPP_TOTMODINITQTYORDGR0_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTINITQTYORD0_N',
        })
    public KPP_TOTINITQTYORD0_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTMODINITQTYORD0_N',
        })
    public KPP_TOTMODINITQTYORD0_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTREFGEST_N',
        })
    public KPP_TOTREFGEST_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTMODREFGEST_N',
        })
    public KPP_TOTMODREFGEST_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTMODPDC_N',
        })
    public KPP_TOTMODPDC_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTPDC_N',
        })
    public KPP_TOTPDC_N: number | null;

}
