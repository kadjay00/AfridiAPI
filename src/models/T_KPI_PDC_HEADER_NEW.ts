import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_PDC_HEADER_NEW', {schema: 'dbo' } )
export class T_KPI_PDC_HEADER_NEW {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPH_MONTHYEAR_N',
        })
    public KPH_MONTHYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPH_MONTH_N',
        })
    public KPH_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPH_WEEKYEAR_N',
        })
    public KPH_WEEKYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPH_WEEK_N',
        })
    public KPH_WEEK_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'KPH_MANAGER_N',
        })
    public KPH_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'KPH_GROUP_C',
        })
    public KPH_GROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'KPH_SUPPLIERID_C',
        })
    public KPH_SUPPLIERID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
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

}
