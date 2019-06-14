import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRCTLCENTRAL', {schema: 'dbo' } )
@Index('IX_TRCTLCENTRAL_PKINDEX', ['TLC_CLIENTID_C', 'TLC_MODELNAME_C', 'TLC_LOCATION_C', 'TLC_ETAPPENBR_N', 'TLC_DATECONCERNED_DAT'], {unique: true})
export class T_TRCTLCENTRAL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'TLC_CLIENTID_C',
        })
    public TLC_CLIENTID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'TLC_MODELNAME_C',
        })
    public TLC_MODELNAME_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'TLC_DATECONCERNED_DAT',
        })
    public TLC_DATECONCERNED_DAT: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'TLC_LOCATION_C',
        })
    public TLC_LOCATION_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TLC_ETAPPENBR_N',
        })
    public TLC_ETAPPENBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'TLC_UPDATEHOUR_HR',
        })
    public TLC_UPDATEHOUR_HR: string | null;

    @Column('char', {
        nullable: true,
        name: 'TLC_RESULTCODE_C',
        })
    public TLC_RESULTCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TLC_STARTDATEEXEC_DAT',
        })
    public TLC_STARTDATEEXEC_DAT: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'TLC_STARTHOUREXEC_HR',
        })
    public TLC_STARTHOUREXEC_HR: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TLC_ENDDATEEXEC_DAT',
        })
    public TLC_ENDDATEEXEC_DAT: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'TLC_ENDHOUREXEC_HR',
        })
    public TLC_ENDHOUREXEC_HR: string | null;

    @Column('char', {
        nullable: true,
        name: 'TLC_FINALSTATUS_C',
        })
    public TLC_FINALSTATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'TLC_ERRORCODE_C',
        })
    public TLC_ERRORCODE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'TLC_FIRSTSESSION_N',
        })
    public TLC_FIRSTSESSION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'TLC_SEPERATOR1_C',
        })
    public TLC_SEPERATOR1_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'TLC_LASTSESSION_N',
        })
    public TLC_LASTSESSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 57,
        name: 'TLC_FILLER1_C',
        })
    public TLC_FILLER1_C: string | null;

}
