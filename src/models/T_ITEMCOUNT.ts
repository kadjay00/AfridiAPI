import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMCOUNT', {schema: 'dbo' } )
@Index('IX_ITEMCOUNT_PKINDEX', ['ITC_GROUP_C', 'ITC_ACTIVITY_N', 'ITC_SUBDEPARTMENT_N', 'ITC_SALESGROUP_C', 'ITC_SALESFAMILY_C', 'ITC_SALESSUBFAMILY_C'], {unique: true})
export class T_ITEMCOUNT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'ITC_GROUP_C',
        })
    public ITC_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ITC_ACTIVITY_N',
        })
    public ITC_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ITC_SUBDEPARTMENT_N',
        })
    public ITC_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ITC_SALESGROUP_C',
        })
    public ITC_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ITC_SALESFAMILY_C',
        })
    public ITC_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ITC_SALESSUBFAMILY_C',
        })
    public ITC_SALESSUBFAMILY_C: string;

    @Column('int', {
        nullable: true,
        name: 'ITC_ITEMCOUNT_N',
        })
    public ITC_ITEMCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITC_FLAG1_C',
        })
    public ITC_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITC_FLAG2_C',
        })
    public ITC_FLAG2_C: string | null;

}
