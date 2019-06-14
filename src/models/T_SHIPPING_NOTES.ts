import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SHIPPING_NOTES', {schema: 'dbo' } )
@Index('IDX_SHIPNOTE01', ['SHN_CREATIONDATE_DAT'])
@Index('IDX_SHIPPING_NOTES_DOCNUMBER', ['SHN_DOCNUMBER_C'])
@Index('IX_SHIPPING_NOTES_SESSION', ['SHN_SESSION_N'])
export class T_SHIPPING_NOTES {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SHN_SHIPPINGNOTE_N',
        })
    public SHN_SHIPPINGNOTE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'SHN_DOCTYPE_C',
        })
    public SHN_DOCTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 18,
        name: 'SHN_DOCNUMBER_C',
        })
    public SHN_DOCNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'SHN_INVOICE_DAT',
        })
    public SHN_INVOICE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'SHN_SUPPLIERID_C',
        })
    public SHN_SUPPLIERID_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'SHN_DALLASCENTER_N',
        })
    public SHN_DALLASCENTER_N: number;

    @Column('int', {
        nullable: true,
        name: 'SHN_WAREHOUSE_N',
        })
    public SHN_WAREHOUSE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHN_DEPOTUNIT_N',
        })
    public SHN_DEPOTUNIT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_FOODNFOOD_C',
        })
    public SHN_FOODNFOOD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SHN_CURRENCY_C',
        })
    public SHN_CURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_STATUS_C',
        })
    public SHN_STATUS_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'SHN_TOTALSALE_D',
        })
    public SHN_TOTALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'SHN_TOTALCOST_D',
        })
    public SHN_TOTALCOST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'SHN_TOTALSALEPVEXTAXT_D',
        })
    public SHN_TOTALSALEPVEXTAXT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHN_TOTALLINES_N',
        })
    public SHN_TOTALLINES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'SHN_TOTALCOLLIS_D',
        })
    public SHN_TOTALCOLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'SHN_TOTALVOLUME_D',
        })
    public SHN_TOTALVOLUME_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'SHN_TOTALEMPTYUNIT_D',
        })
    public SHN_TOTALEMPTYUNIT_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_DALLASCREATION_DAT',
        })
    public SHN_DALLASCREATION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_AUTOPRINT_C',
        })
    public SHN_AUTOPRINT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_PRINTED_C',
        })
    public SHN_PRINTED_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SHN_INVOICE_N',
        })
    public SHN_INVOICE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_ARCHIVED_C',
        })
    public SHN_ARCHIVED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SHN_CDLABEL_C',
        })
    public SHN_CDLABEL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHN_REFCORRECTION_C',
        })
    public SHN_REFCORRECTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SHN_USERID_C',
        })
    public SHN_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_CREATIONDATE_DAT',
        })
    public SHN_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_UPDATEDATE_DAT',
        })
    public SHN_UPDATEDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SHN_SESSION_N',
        })
    public SHN_SESSION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_ORDER_DAT',
        })
    public SHN_ORDER_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_PDTSELECT_C',
        })
    public SHN_PDTSELECT_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SHN_ORIGRECEPTION_N',
        })
    public SHN_ORIGRECEPTION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_LOGBOOK_C',
        })
    public SHN_LOGBOOK_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHN_DELIVERYDATE_DAT',
        })
    public SHN_DELIVERYDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'SHN_BAKEOFF_C',
        })
    public SHN_BAKEOFF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'SHN_COMMENT_C',
        })
    public SHN_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'SHN_TRAILER_NUMBER_C',
        })
    public SHN_TRAILER_NUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHN_TRANSPORT_NUMBER_N',
        })
    public SHN_TRANSPORT_NUMBER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHN_TRANSFERT_N',
        })
    public SHN_TRANSFERT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SHN_AUTOLOAD_C',
        })
    public SHN_AUTOLOAD_C: string | null;

}
