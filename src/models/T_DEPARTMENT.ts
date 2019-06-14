import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DEPARTMENT', {schema: 'dbo' } )
@Index('IX_DEPARTMENT_PKINDEX', ['DEP_DEPARTMENT_N', 'DEP_SUBDEPARTMENT_N'], {unique: true})
export class T_DEPARTMENT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DEP_DEPARTMENT_N',
        })
    public DEP_DEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DEP_SUBDEPARTMENT_N',
        })
    public DEP_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DEP_DESCRIPNED_C',
        })
    public DEP_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DEP_DESCRIPFRA_C',
        })
    public DEP_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'DEP_FOODNONFOOD_C',
        })
    public DEP_FOODNONFOOD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DEP_USERID_C',
        })
    public DEP_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'dep_flagdelete_C',
        })
    public dep_flagdelete_C: string | null;

}
