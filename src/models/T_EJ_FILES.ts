import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EJ_FILES', {schema: 'dbo' } )
export class T_EJ_FILES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 35,
        name: 'EJF_FILENAME_C',
        })
    public EJF_FILENAME_C: string;

    @Column('int', {
        nullable: true,
        name: 'EJF_FILESIZE_N',
        })
    public EJF_FILESIZE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'EJF_SESSION_N',
        })
    public EJF_SESSION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'EJF_SESSIONDATE_DAT',
        })
    public EJF_SESSIONDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'EJF_RECORDS_N',
        })
    public EJF_RECORDS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'EJF_RECORDSSTORED_N',
        })
    public EJF_RECORDSSTORED_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'EJF_STATUS_C',
        })
    public EJF_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EJF_STATUSDATE_DAT',
        })
    public EJF_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'EJF_CDLABEL_C',
        })
    public EJF_CDLABEL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'EJF_LABELUSER_C',
        })
    public EJF_LABELUSER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'EJF_FLAG1_C',
        })
    public EJF_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'EJF_FLAG2_C',
        })
    public EJF_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'EJF_FLAG3_C',
        })
    public EJF_FLAG3_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EJF_ARCHCHCKD_DAT',
        })
    public EJF_ARCHCHCKD_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EJF_ARCHTRNSFROK_DAT',
        })
    public EJF_ARCHTRNSFROK_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EJF_ARCHTRNSFRNOK_DAT',
        })
    public EJF_ARCHTRNSFRNOK_DAT: Date | null;

}
