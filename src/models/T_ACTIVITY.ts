import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIVITY', {schema: 'dbo' } )
export class T_ACTIVITY {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'act_spid_n',
        })
    public act_spid_n: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'act_logintime_dat',
        })
    public act_logintime_dat: Date;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'act_jobdescription_c',
        })
    public act_jobdescription_c: string | null;

}
