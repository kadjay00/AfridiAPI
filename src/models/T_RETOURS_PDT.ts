import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOURS_PDT', {schema: 'dbo' } )
export class T_RETOURS_PDT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RTP_REPRISE_N',
        })
    public RTP_REPRISE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'RTP_PDTNR',
        })
    public RTP_PDTNR: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RTP_RETOUR_C',
        })
    public RTP_RETOUR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RTP_RETOUR2_C',
        })
    public RTP_RETOUR2_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'RTP_COMMENT_C',
        })
    public RTP_COMMENT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RTP_TRANSFERT_DAT',
        })
    public RTP_TRANSFERT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RTP_PDT_DAT',
        })
    public RTP_PDT_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'RTP_ERRORCODE_C',
        })
    public RTP_ERRORCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RTP_USERID_C',
        })
    public RTP_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RTP_CREATIONDATE_DAT',
        })
    public RTP_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RTP_UPDATEDATE',
        })
    public RTP_UPDATEDATE: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'RTP_STATUS_C',
        })
    public RTP_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RTP_TYPE_C',
        })
    public RTP_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'rtp_retourtype_c',
        })
    public rtp_retourtype_c: string | null;

}
