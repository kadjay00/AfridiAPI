import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LITIGES', {schema: 'dbo' } )
export class T_LITIGES {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'LIT_LITIGE_N',
        })
    public LIT_LITIGE_N: number;

    @Column('char', {
        nullable: true,
        name: 'LIT_PDFFLAG_C',
        })
    public LIT_PDFFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LIT_TYPE_C',
        })
    public LIT_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LIT_MOTIF_C',
        })
    public LIT_MOTIF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MOT_LABELLANG_C',
        })
    public MOT_LABELLANG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MOT_TYPE_C',
        })
    public MOT_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LIT_STATUS_C',
        })
    public LIT_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LIT_STATUSMAJSTOCK_C',
        })
    public LIT_STATUSMAJSTOCK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LIT_RESPONSIBLE_C',
        })
    public LIT_RESPONSIBLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'LIT_SUPPLIERID_C',
        })
    public LIT_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LIT_CONTACT_C',
        })
    public LIT_CONTACT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'LIT_AUTORISATIONID_C',
        })
    public LIT_AUTORISATIONID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LIT_STATUS_AUTORISATION_C',
        })
    public LIT_STATUS_AUTORISATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LIT_CURRENCY_C',
        })
    public LIT_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LIT_TOTALSALE_D',
        })
    public LIT_TOTALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'LIT_TOTALCOST_D',
        })
    public LIT_TOTALCOST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LIT_TOTALSALEPVEXTAXT_D',
        })
    public LIT_TOTALSALEPVEXTAXT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'LIT_TOTALLINES_N',
        })
    public LIT_TOTALLINES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LIT_TOTALCOLLIS_D',
        })
    public LIT_TOTALCOLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'LIT_TOTALVOLUME_D',
        })
    public LIT_TOTALVOLUME_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LIT_USERID_C',
        })
    public LIT_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIT_CREATIONDATE_DAT',
        })
    public LIT_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIT_UPDATEDATE_DAT',
        })
    public LIT_UPDATEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        name: 'LIT_COMMENT_C',
        })
    public LIT_COMMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LIT_TYPE_ENCODAGE_C',
        })
    public LIT_TYPE_ENCODAGE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIT_FEEDBACK_DAT',
        })
    public LIT_FEEDBACK_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIT_EXPORT_DAT',
        })
    public LIT_EXPORT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIT_CREDIT_DAT',
        })
    public LIT_CREDIT_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'LIT_INUSEBY_C',
        })
    public LIT_INUSEBY_C: string | null;

}
