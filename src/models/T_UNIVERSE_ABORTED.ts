import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_UNIVERSE_ABORTED', {schema: 'dbo' } )
export class T_UNIVERSE_ABORTED {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'UNA_PROCNO_N',
        })
    public UNA_PROCNO_N: number;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'UNA_SESSSION_C',
        })
    public UNA_SESSSION_C: string | null;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 25,
        name: 'UNA_UPROC_C',
        })
    public UNA_UPROC_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'UNA_STARTDATE_DAT',
        })
    public UNA_STARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'UNA_ENDDATE_DAT',
        })
    public UNA_ENDDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'UNA_RELAUNCH_DAT',
        })
    public UNA_RELAUNCH_DAT: Date | null;

}
