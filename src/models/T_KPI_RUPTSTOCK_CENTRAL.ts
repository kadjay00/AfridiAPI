import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_RUPTSTOCK_CENTRAL', {schema: 'dbo' } )
export class T_KPI_RUPTSTOCK_CENTRAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KPR_ID_N',
        })
    public KPR_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'KPR_STOREID_C',
        })
    public KPR_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'KPR_TYPE_C',
        })
    public KPR_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'KPR_YEAR_N',
        })
    public KPR_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPR_MONTH_N',
        })
    public KPR_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPR_WEEK_N',
        })
    public KPR_WEEK_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KPR_GROUP_C',
        })
    public KPR_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_ACTIVITY_N',
        })
    public KPR_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KPR_SUBDEPARTMENT_N',
        })
    public KPR_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPR_SALESGROUP_C',
        })
    public KPR_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KPR_SALESFAMILY_C',
        })
    public KPR_SALESFAMILY_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'KPR_PDCACTIVE_C',
        })
    public KPR_PDCACTIVE_C: string;

    @Column('char', {
        nullable: false,
        name: 'KPR_CIRCUIT_C',
        })
    public KPR_CIRCUIT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 13,
        name: 'KPR_SUPPLIERID_C',
        })
    public KPR_SUPPLIERID_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPR_NUMRUPT_N',
        })
    public KPR_NUMRUPT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPR_NUMREFCHECKED_N',
        })
    public KPR_NUMREFCHECKED_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'KPR_PCTRUPT_D',
        })
    public KPR_PCTRUPT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 2,
        name: 'KPR_CHIFFRUPT_D',
        })
    public KPR_CHIFFRUPT_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KPR_CREATE_DAT',
        })
    public KPR_CREATE_DAT: Date | null;

}
