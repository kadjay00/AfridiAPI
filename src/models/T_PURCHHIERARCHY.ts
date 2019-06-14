import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PURCHHIERARCHY', {schema: 'dbo' } )
@Index('IX_PURCHHIERARCHY_PKINDEX', ['PHY_DEPARTMENT_N', 'PHY_PURCHGROUP_C', 'PHY_PURCHFAMILY_C', 'PHY_PURCHSUBFAMILY'], {unique: true})
export class T_PURCHHIERARCHY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PHY_DEPARTMENT_N',
        })
    public PHY_DEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PHY_SUBDEPARTMENT_N',
        })
    public PHY_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PHY_PURCHGROUP_C',
        })
    public PHY_PURCHGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PHY_PURCHFAMILY_C',
        })
    public PHY_PURCHFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PHY_PURCHSUBFAMILY',
        })
    public PHY_PURCHSUBFAMILY: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PHY_DESCRIPNED_C',
        })
    public PHY_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PHY_DESCRIPFRA_C',
        })
    public PHY_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PHY_FOODNONFOOD_C',
        })
    public PHY_FOODNONFOOD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PHY_USERID_C',
        })
    public PHY_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'phy_flagdelete_C',
        })
    public phy_flagdelete_C: string | null;

}
