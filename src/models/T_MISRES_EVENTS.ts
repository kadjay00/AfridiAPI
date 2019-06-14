import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MISRES_EVENTS', {schema: 'dbo' } )
export class T_MISRES_EVENTS {

    @PrimaryGeneratedColumn({
        type: 'smallint',
        name: 'MRE_EVENTID_N',
        })
    public MRE_EVENTID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MRE_DESCRIPTIONNED_C',
        })
    public MRE_DESCRIPTIONNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MRE_DESCRIPTIONFRA_C',
        })
    public MRE_DESCRIPTIONFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'MRE_FLAGDELETE_C',
        })
    public MRE_FLAGDELETE_C: string | null;

}
