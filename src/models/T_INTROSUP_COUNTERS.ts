import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTROSUP_COUNTERS', {schema: 'dbo' } )
export class T_INTROSUP_COUNTERS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ISC_SUBDEPARTMENT_N',
        })
    public ISC_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ISC_SALESGROUP_C',
        })
    public ISC_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ISC_SALESFAMILY_C',
        })
    public ISC_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ISC_SALESSUBFAMILY_C',
        })
    public ISC_SALESSUBFAMILY_C: string;

    @Column('int', {
        nullable: true,
        name: 'ISC_BASE_N',
        })
    public ISC_BASE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ISC_CHANGEDPLUS_N',
        })
    public ISC_CHANGEDPLUS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ISC_CHANGEDMIN_N',
        })
    public ISC_CHANGEDMIN_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ISC_MAG_N',
        })
    public ISC_MAG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ISC_REAL_N',
        })
    public ISC_REAL_N: number | null;

}
