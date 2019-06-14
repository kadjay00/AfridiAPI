import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_ACTIVITY_OBJ', {schema: 'dbo' } )
export class T_STAFF_ACTIVITY_OBJ {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OBJ_YEAR_N',
        })
    public OBJ_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OBJ_WEEKOFYEAR_N',
        })
    public OBJ_WEEKOFYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OBJ_ACTIVITY_N',
        })
    public OBJ_ACTIVITY_N: number;

    @Column('int', {
        nullable: true,
        name: 'OBJ_FUNCTION_N',
        })
    public OBJ_FUNCTION_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'OBJ_HOURSPAID_N',
        })
    public OBJ_HOURSPAID_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'OBJ_HOURSPREST_N',
        })
    public OBJ_HOURSPREST_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'OBJ_SCHOOLS_N',
        })
    public OBJ_SCHOOLS_N: number | null;

}
