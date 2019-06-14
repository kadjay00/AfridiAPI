import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_PDC_CENTRAL', {schema: 'dbo' } )
export class T_KPI_PDC_CENTRAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KPP_ID_N',
        })
    public KPP_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'KPP_STOREID_C',
        })
    public KPP_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'KPP_TYPE_C',
        })
    public KPP_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'KPP_YEAR_N',
        })
    public KPP_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPP_MONTH_N',
        })
    public KPP_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPP_WEEK_N',
        })
    public KPP_WEEK_N: number;

    @Column('int', {
        nullable: true,
        name: 'KPP_MANAGER_N',
        })
    public KPP_MANAGER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KPP_GROUP_C',
        })
    public KPP_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPP_ACTIVITY_N',
        })
    public KPP_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPP_SUBDEPARTMENT_N',
        })
    public KPP_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPP_SALESGROUP_C',
        })
    public KPP_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPP_SALESFAMILY_C',
        })
    public KPP_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'KPP_SUPPLIERID_C',
        })
    public KPP_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'KPP_CIRCUIT_C',
        })
    public KPP_CIRCUIT_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTMODINITQTYORD_N',
        })
    public KPP_TOTMODINITQTYORD_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPP_TOTINITQTYORD_N',
        })
    public KPP_TOTINITQTYORD_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'KPP_PCTMODINITQTYORD_D',
        })
    public KPP_PCTMODINITQTYORD_D: number | null;

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

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'KPP_PCTMODREFGEST_D',
        })
    public KPP_PCTMODREFGEST_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KPP_CREATE_DAT',
        })
    public KPP_CREATE_DAT: Date | null;

}
