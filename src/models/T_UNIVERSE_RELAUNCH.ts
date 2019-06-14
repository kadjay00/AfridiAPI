import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_UNIVERSE_RELAUNCH', {schema: 'dbo' } )
export class T_UNIVERSE_RELAUNCH {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 25,
        name: 'UNR_UPROC_C',
        })
    public UNR_UPROC_C: string;

    @Column('char', {
        nullable: true,
        name: 'UNR_AUTHORISATION_C',
        })
    public UNR_AUTHORISATION_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'UNR_MAXTIMING_N',
        })
    public UNR_MAXTIMING_N: number;

}
