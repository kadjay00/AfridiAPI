import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CADASTER', {schema: 'dbo' } )
export class T_CADASTER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'CAD_PLAN_ID_C',
        })
    public CAD_PLAN_ID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'CAD_ACTIVITY_C',
        })
    public CAD_ACTIVITY_C: string;

    @Column('int', {
        nullable: false,
        name: 'CAD_DEPARTMENT_N',
        })
    public CAD_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'CAD_FAMILY_C',
        })
    public CAD_FAMILY_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'CAD_DESCRIPFRA_C',
        })
    public CAD_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'CAD_DESCRIPNED_C',
        })
    public CAD_DESCRIPNED_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'CAD_NUMETIK_N',
        })
    public CAD_NUMETIK_N: number;

    @Column('int', {
        nullable: false,
        name: 'CAD_ORDER_N',
        })
    public CAD_ORDER_N: number;

    @Column('char', {
        nullable: true,
        name: 'CAD_FLAG1_C',
        })
    public CAD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CAD_FLAG2_C',
        })
    public CAD_FLAG2_C: string | null;

}
