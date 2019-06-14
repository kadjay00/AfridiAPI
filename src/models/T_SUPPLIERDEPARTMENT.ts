import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIERDEPARTMENT', {schema: 'dbo' } )
export class T_SUPPLIERDEPARTMENT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'SPD_SUPPLIERID_C',
        })
    public SPD_SUPPLIERID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SPD_DEPARTMENT_N',
        })
    public SPD_DEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SPD_SUBDEPARTMENT_N',
        })
    public SPD_SUBDEPARTMENT_N: number;

    @Column('char', {
        nullable: true,
        name: 'SPD_RETOUR_C',
        })
    public SPD_RETOUR_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPD_INFOCHEF_C',
        })
    public SPD_INFOCHEF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPD_FLAG1_C',
        })
    public SPD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPD_FLAG2_C',
        })
    public SPD_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPD_FLAG3_C',
        })
    public SPD_FLAG3_C: string | null;

}
