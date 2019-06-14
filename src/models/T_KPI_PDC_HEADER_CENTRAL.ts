import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_PDC_HEADER_CENTRAL', {schema: 'dbo' } )
export class T_KPI_PDC_HEADER_CENTRAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KPH_ID_N',
        })
    public KPH_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'KPH_STOREID_C',
        })
    public KPH_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'KPH_TYPE_C',
        })
    public KPH_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'KPH_YEAR_N',
        })
    public KPH_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPH_MONTH_N',
        })
    public KPH_MONTH_N: number;

    @Column('int', {
        nullable: false,
        name: 'KPH_WEEK_N',
        })
    public KPH_WEEK_N: number;

    @Column('int', {
        nullable: true,
        name: 'KPH_MANAGER_N',
        })
    public KPH_MANAGER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KPH_GROUP_C',
        })
    public KPH_GROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'KPH_SUPPLIERID_C',
        })
    public KPH_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'KPH_CIRCUIT_C',
        })
    public KPH_CIRCUIT_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPH_TOTMODPDC_N',
        })
    public KPH_TOTMODPDC_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'KPH_TOTPDC_N',
        })
    public KPH_TOTPDC_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'KPH_PCTMODPDC_D',
        })
    public KPH_PCTMODPDC_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'KPH_CREATE_DAT',
        })
    public KPH_CREATE_DAT: Date | null;

}
