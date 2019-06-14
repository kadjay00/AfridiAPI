import {Column, Entity} from 'typeorm';

@Entity('T_WINGEST_DOCNUMBER', {schema: 'dbo' } )
export class T_WINGEST_DOCNUMBER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'WDO_DOCNUMBER_N',
        })
    public WDO_DOCNUMBER_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'WDO_TYPE_C',
        })
    public WDO_TYPE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'WDO_VALIDATIONDATE_DAT',
        })
    public WDO_VALIDATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'WDO_TRANSMITIONDATE_DAT',
        })
    public WDO_TRANSMITIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'WDO_CREATIONDATE_DAT',
        })
    public WDO_CREATIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'WDO_USERCREATE_C',
        })
    public WDO_USERCREATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'WDO_USERVALIDATE_C',
        })
    public WDO_USERVALIDATE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_CANCELED_C',
        })
    public WDO_CANCELED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'WDO_USERCANCEL_C',
        })
    public WDO_USERCANCEL_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'WDO_CANCELDATE_DAT',
        })
    public WDO_CANCELDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'WDO_LINKTRANSFERTPRIXROND_N',
        })
    public WDO_LINKTRANSFERTPRIXROND_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_TRFTYPE_C',
        })
    public WDO_TRFTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_LOGBOOK_C',
        })
    public WDO_LOGBOOK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_STATE_C',
        })
    public WDO_STATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'WDO_STORETO_C',
        })
    public WDO_STORETO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'WDO_ACCOUNT_C',
        })
    public WDO_ACCOUNT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WDO_ACTIVITY_N',
        })
    public WDO_ACTIVITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'WDO_COMMENT_C',
        })
    public WDO_COMMENT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WDO_REPRISE_N',
        })
    public WDO_REPRISE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'WDO_RECORD_N',
        })
    public WDO_RECORD_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'WDO_CREDITNOTE_DAT',
        })
    public WDO_CREDITNOTE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'WDO_ORIGIN_C',
        })
    public WDO_ORIGIN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_SAV_C',
        })
    public WDO_SAV_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'WDO_SAVREF_C',
        })
    public WDO_SAVREF_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WDO_DONATIONID_N',
        })
    public WDO_DONATIONID_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_KITCHEN_C',
        })
    public WDO_KITCHEN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WDO_KITCHENTYPE_C',
        })
    public WDO_KITCHENTYPE_C: string | null;

}
