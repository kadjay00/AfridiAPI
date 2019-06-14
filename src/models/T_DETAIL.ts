import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DETAIL', {schema: 'dbo' } )
@Index('IX_DETAIL_PKINDEX', ['DTL_DETAILID_N'], {unique: true})
export class T_DETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DTL_DETAILID_N',
        })
    public DTL_DETAILID_N: number;

    @Column('int', {
        nullable: false,
        name: 'DTL_DEPARTMENTFROM_N',
        })
    public DTL_DEPARTMENTFROM_N: number;

    @Column('int', {
        nullable: false,
        name: 'DTL_DEPARTMENTTO_N',
        })
    public DTL_DEPARTMENTTO_N: number;

    @Column('int', {
        nullable: true,
        name: 'DTL_SUBDEPARTMENTFROM_N',
        })
    public DTL_SUBDEPARTMENTFROM_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'DTL_SUBDEPARTMENTTO_N',
        })
    public DTL_SUBDEPARTMENTTO_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'DTL_HIERARCHYFROM_C',
        })
    public DTL_HIERARCHYFROM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'DTL_HIERARCHYTO_C',
        })
    public DTL_HIERARCHYTO_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'DTL_VALUE1_N',
        })
    public DTL_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'DTL_VALUE2_N',
        })
    public DTL_VALUE2_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'DTL_FLAG1_C',
        })
    public DTL_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'DTL_FLAG2_C',
        })
    public DTL_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DTL_USERID_C',
        })
    public DTL_USERID_C: string | null;

}
