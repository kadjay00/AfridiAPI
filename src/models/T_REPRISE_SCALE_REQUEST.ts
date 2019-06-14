import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_SCALE_REQUEST', {schema: 'dbo' } )
export class T_REPRISE_SCALE_REQUEST {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'RSR_ID_N',
        })
    public RSR_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'RSR_MODE_C',
        })
    public RSR_MODE_C: string;

    @Column('int', {
        nullable: true,
        name: 'RSR_INVENTORYID_N',
        })
    public RSR_INVENTORYID_N: number | null;

    @Column('int', {
        nullable: false,
        name: 'RSR_ACTIVITY_N',
        })
    public RSR_ACTIVITY_N: number;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'RSR_APPNAME_C',
        })
    public RSR_APPNAME_C: string;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'RSR_USERID_C',
        })
    public RSR_USERID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'RSR_COMPUTER_C',
        })
    public RSR_COMPUTER_C: string;

    @Column('int', {
        nullable: false,
        name: 'RSR_PID_N',
        })
    public RSR_PID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'RSR_REQUEST_DAT',
        })
    public RSR_REQUEST_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'RSR_STATE_C',
        })
    public RSR_STATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RSR_START_DAT',
        })
    public RSR_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RSR_END_DAT',
        })
    public RSR_END_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'RSR_CHOICE_C',
        })
    public RSR_CHOICE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RSR_REPRISE_N',
        })
    public RSR_REPRISE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RSR_DOCNUMBER_N',
        })
    public RSR_DOCNUMBER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RSR_JOBIDERROR_N',
        })
    public RSR_JOBIDERROR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RSR_JOBIDREPRISE_N',
        })
    public RSR_JOBIDREPRISE_N: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'RSR_ARCHIVE_C',
        })
    public RSR_ARCHIVE_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'RSR_MSG_C',
        })
    public RSR_MSG_C: string | null;

}
