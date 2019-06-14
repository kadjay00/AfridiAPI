import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_SOUSGROUPE', {schema: 'dbo' } )
export class T_BALANCE_SOUSGROUPE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BSG_ID_N',
        })
    public BSG_ID_N: number;

    @Column('int', {
        nullable: true,
        name: 'BSG_DEPARTMENT_N',
        })
    public BSG_DEPARTMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BSG_SUBDEPARTMENT_N',
        })
    public BSG_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'BSG_SALESGROUP_C',
        })
    public BSG_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'BSG_SALESFAMILY_C',
        })
    public BSG_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'BSG_SALESSUBFAMILY_C',
        })
    public BSG_SALESSUBFAMILY_C: string | null;

    @Column('numeric', {
        nullable: false,
        scale: 0,
        name: 'BSG_BGRID_N',
        })
    public BSG_BGRID_N: number;

}
