import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SALESHIERARCHY', {schema: 'dbo' } )
@Index('IX_SALESHIERARCHY_PKINDEX', ['SHY_DEPARTMENT_N', 'SHY_SALESGROUP_C', 'SHY_SALESFAMILY_C', 'SHY_SALESSUBFAMILY'], {unique: true})
export class T_SALESHIERARCHY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SHY_DEPARTMENT_N',
        })
    public SHY_DEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SHY_SUBDEPARTMENT_N',
        })
    public SHY_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SHY_SALESGROUP_C',
        })
    public SHY_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SHY_SALESFAMILY_C',
        })
    public SHY_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SHY_SALESSUBFAMILY',
        })
    public SHY_SALESSUBFAMILY: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SHY_DESCRIPNED_C',
        })
    public SHY_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SHY_DESCRIPFRA_C',
        })
    public SHY_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHY_FOODNONFOOD_C',
        })
    public SHY_FOODNONFOOD_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'SHY_LENGTH_D',
        })
    public SHY_LENGTH_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SHY_USERID_C',
        })
    public SHY_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'shy_flagdelete_C',
        })
    public shy_flagdelete_C: string | null;

}
