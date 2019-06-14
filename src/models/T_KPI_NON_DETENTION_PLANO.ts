import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_NON_DETENTION_PLANO', {schema: 'dbo' } )
export class T_KPI_NON_DETENTION_PLANO {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'NDP_YEAR_N',
        })
    public NDP_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'NDP_MONTH_N',
        })
    public NDP_MONTH_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'NDP_PLAN_ID_C',
        })
    public NDP_PLAN_ID_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'NDP_PLAN_FRA_C',
        })
    public NDP_PLAN_FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'NDP_PLAN_NED_C',
        })
    public NDP_PLAN_NED_C: string | null;

}
