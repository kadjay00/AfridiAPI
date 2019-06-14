import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMHIERARCHY', {schema: 'dbo' } )
@Index('IX_ITEMHIERARCHY_PKINDEX', ['IHY_IDNUMBER_C', 'IHY_GROUP_C', 'IHY_ACTIVITY_N', 'IHY_SUBDEPARTMENT_N', 'IHY_SALESGROUP_C', 'IHY_SALESFAMILY_C', 'IHY_SALESSUBFAMILY_C'], {unique: true})
export class T_ITEMHIERARCHY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IHY_IDNUMBER_C',
        })
    public IHY_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'IHY_DEPARTMENT_N',
        })
    public IHY_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IHY_GIBREF_C',
        })
    public IHY_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'IHY_GROUP_C',
        })
    public IHY_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IHY_ACTIVITY_N',
        })
    public IHY_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IHY_SUBDEPARTMENT_N',
        })
    public IHY_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'IHY_SALESGROUP_C',
        })
    public IHY_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'IHY_SALESFAMILY_C',
        })
    public IHY_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'IHY_SALESSUBFAMILY_C',
        })
    public IHY_SALESSUBFAMILY_C: string;

    @Column('int', {
        nullable: true,
        name: 'IHY_LVLRANGPV_N',
        })
    public IHY_LVLRANGPV_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IHY_LVLRANGPF_N',
        })
    public IHY_LVLRANGPF_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IHY_LVLRANGBW_N',
        })
    public IHY_LVLRANGBW_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IHY_FLAG1_C',
        })
    public IHY_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IHY_FLAG2_C',
        })
    public IHY_FLAG2_C: string | null;

}
