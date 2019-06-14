import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_NBCHIERARCHY', {schema: 'dbo' } )
export class T_NBCHIERARCHY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'NBC_SUBDEPARTMENT_N',
        })
    public NBC_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'NBC_SALESGROUP_C',
        })
    public NBC_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'NBC_SALESFAMILY_C',
        })
    public NBC_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'NBC_SALESSUBFAMILY_C',
        })
    public NBC_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'NBC_LANGUAGECODE_C',
        })
    public NBC_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'NBC_DESCRIPTION_C',
        })
    public NBC_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'NBC_FLAGDELETE_C',
        })
    public NBC_FLAGDELETE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'NBC_USERID_C',
        })
    public NBC_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'nbc_itemgroup_c',
        })
    public nbc_itemgroup_c: string | null;

    @Column('char', {
        nullable: true,
        name: 'NBC_HIDEPRICESLIM_C',
        })
    public NBC_HIDEPRICESLIM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'NBC_ABACUS_C',
        })
    public NBC_ABACUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'NBC_XPLACE_C',
        })
    public NBC_XPLACE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'NBC_DESCRIPTIONRF_C',
        })
    public NBC_DESCRIPTIONRF_C: string | null;

}
