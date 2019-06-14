import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROSPECTS_MASTER', {schema: 'dbo' } )
export class T_PROSPECTS_MASTER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRM_YEAR_N',
        })
    public PRM_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRM_WEEK_N',
        })
    public PRM_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PRM_GROUP_C',
        })
    public PRM_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRM_ACTIVITY_N',
        })
    public PRM_ACTIVITY_N: number;

    @Column('char', {
        nullable: true,
        name: 'PRM_BASE_C',
        })
    public PRM_BASE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PRM_USER_C',
        })
    public PRM_USER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRM_DATE_DAT',
        })
    public PRM_DATE_DAT: Date | null;

}
