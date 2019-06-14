import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOURS', {schema: 'dbo' } )
export class T_RETOURS {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'RET_RETOURS_N',
        })
    public RET_RETOURS_N: number;

    @Column('char', {
        nullable: true,
        name: 'RET_PDFFLAG_C',
        })
    public RET_PDFFLAG_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'RET_TYPE_C',
        })
    public RET_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_MOTIF_C',
        })
    public RET_MOTIF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_STATUS_C',
        })
    public RET_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RET_RESPONSIBLE_C',
        })
    public RET_RESPONSIBLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RET_SUPPLIERID_C',
        })
    public RET_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RET_CONTACT_C',
        })
    public RET_CONTACT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RET_AUTORISATIONID_C',
        })
    public RET_AUTORISATIONID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_STATUS_AUTORISATION_C',
        })
    public RET_STATUS_AUTORISATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RET_CARNUMBER_C',
        })
    public RET_CARNUMBER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_PREVDEXPED_DAT',
        })
    public RET_PREVDEXPED_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_DEXPED_DAT',
        })
    public RET_DEXPED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'RET_CURRENCY_C',
        })
    public RET_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'RET_TOTALSALE_D',
        })
    public RET_TOTALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'RET_TOTALCOST_D',
        })
    public RET_TOTALCOST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'RET_TOTALSALEPVEXTAXT_D',
        })
    public RET_TOTALSALEPVEXTAXT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'RET_TOTALLINES_N',
        })
    public RET_TOTALLINES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'RET_TOTALCOLLIS_D',
        })
    public RET_TOTALCOLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'RET_TOTALVOLUME_D',
        })
    public RET_TOTALVOLUME_D: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RET_POIDS_N',
        })
    public RET_POIDS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RET_USERID_C',
        })
    public RET_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_CREATIONDATE_DAT',
        })
    public RET_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_UPDATEDATE_DAT',
        })
    public RET_UPDATEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        name: 'RET_COMMENT_C',
        })
    public RET_COMMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_LOGBOOK_C',
        })
    public RET_LOGBOOK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_ORIGIN_C',
        })
    public RET_ORIGIN_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_DEMAND_DAT',
        })
    public RET_DEMAND_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RET_UPDATEUSER_C',
        })
    public RET_UPDATEUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_CREDITNOTE_DAT',
        })
    public RET_CREDITNOTE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'ret_retourtype_c',
        })
    public ret_retourtype_c: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_REFUSED_DAT',
        })
    public RET_REFUSED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'RET_FEUILLEDEROUTE_C',
        })
    public RET_FEUILLEDEROUTE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_STATUSMAJSTOCK_C',
        })
    public RET_STATUSMAJSTOCK_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RET_TRANSMIT_DAT',
        })
    public RET_TRANSMIT_DAT: Date | null;

    @Column('char', {
        nullable: true,
        length: 8,
        name: 'RET_USER_DEMAND_C',
        })
    public RET_USER_DEMAND_C: string | null;

    @Column('char', {
        nullable: true,
        length: 8,
        name: 'RET_USER_EXPED_C',
        })
    public RET_USER_EXPED_C: string | null;

}
