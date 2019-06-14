import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMPERIODE', {schema: 'dbo' } )
@Index('IX_ITEMPERIODE_IDNUMBER', ['ITP_IDNUMBER_C'])
@Index('IX_ITEMPERIODE_ONLINEINDEX', ['ITP_PERIODEFOODNONFOOD_C', 'ITP_PERIODENBR_C', 'ITP_DEPARTMENT_N', 'ITP_LINKCODE_N', 'ITP_PURCHGROUP_C', 'ITP_PURCHFAMILY_C', 'ITP_PURCHSUBFAMILY', 'ITP_GIBREF_C', 'ITP_WAVEYEAR_N', 'ITP_WAVENBR_N'], {unique: true})
export class T_ITEMPERIODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'ITP_PERIODEFOODNONFOOD_C',
        })
    public ITP_PERIODEFOODNONFOOD_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'ITP_PERIODENBR_C',
        })
    public ITP_PERIODENBR_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ITP_WAVEYEAR_N',
        })
    public ITP_WAVEYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ITP_WAVENBR_N',
        })
    public ITP_WAVENBR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'ITP_IDNUMBER_C',
        })
    public ITP_IDNUMBER_C: string;

    @Column('int', {
        nullable: false,
        name: 'ITP_DEPARTMENT_N',
        })
    public ITP_DEPARTMENT_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'ITP_ENDDATE_DAT',
        })
    public ITP_ENDDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        name: 'ITP_SUBDEPARTMENT_N',
        })
    public ITP_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'ITP_PURCHGROUP_C',
        })
    public ITP_PURCHGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'ITP_PURCHFAMILY_C',
        })
    public ITP_PURCHFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'ITP_PURCHSUBFAMILY',
        })
    public ITP_PURCHSUBFAMILY: string;

    @Column('int', {
        nullable: true,
        name: 'ITP_LINKCODE_N',
        })
    public ITP_LINKCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ITP_GIBREF_C',
        })
    public ITP_GIBREF_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'ITP_RECEPTIONNBR_N',
        })
    public ITP_RECEPTIONNBR_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 90,
        name: 'ITP_DESCRIPMUL3_C',
        })
    public ITP_DESCRIPMUL3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_MAXISUPER_C',
        })
    public ITP_MAXISUPER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_PROPOSEDQTY_N',
        })
    public ITP_PROPOSEDQTY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_CORRECTEDQTY_N',
        })
    public ITP_CORRECTEDQTY_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ITP_SALESPRICEPROMO_D',
        })
    public ITP_SALESPRICEPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ITP_SALESPRICE_D',
        })
    public ITP_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ITP_COSTPRICE_D',
        })
    public ITP_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ITP_PROFITPERCENT_D',
        })
    public ITP_PROFITPERCENT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'ITP_SHIPPINGUNIT_D',
        })
    public ITP_SHIPPINGUNIT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_DELIVERYCODE_C',
        })
    public ITP_DELIVERYCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_FOLDERCODE_C',
        })
    public ITP_FOLDERCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_FOLDERDATE_DAT',
        })
    public ITP_FOLDERDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_QUANTIFCODE_C',
        })
    public ITP_QUANTIFCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_HARDSOFTCODE_C',
        })
    public ITP_HARDSOFTCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ITP_QUANTIFMESSAGE_C',
        })
    public ITP_QUANTIFMESSAGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_PREPERATIONCODE_C',
        })
    public ITP_PREPERATIONCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_UPDATEPERMITTED_C',
        })
    public ITP_UPDATEPERMITTED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ITP_TAXPERCENTAGE_D',
        })
    public ITP_TAXPERCENTAGE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_PROPOSEDWAVES_N',
        })
    public ITP_PROPOSEDWAVES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_CORRECTEDWAVES_N',
        })
    public ITP_CORRECTEDWAVES_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ITP_PRICECURRENCY_C',
        })
    public ITP_PRICECURRENCY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ITP_WAVEDESCRIPNED_C',
        })
    public ITP_WAVEDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ITP_WAVEDESCRIPFRA_C',
        })
    public ITP_WAVEDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ITP_ALLOCATION_C',
        })
    public ITP_ALLOCATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ITP_EXPECTEDDELIVERY_C',
        })
    public ITP_EXPECTEDDELIVERY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 90,
        name: 'ITP_DESCRIPMUL3BIS_C',
        })
    public ITP_DESCRIPMUL3BIS_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ITP_COSTPRICEPROMO_D',
        })
    public ITP_COSTPRICEPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ITP_PROFITPERCENTPROMO_D',
        })
    public ITP_PROFITPERCENTPROMO_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_PUBLICITYCODE_C',
        })
    public ITP_PUBLICITYCODE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_ANNOUNCEDQTY_N',
        })
    public ITP_ANNOUNCEDQTY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_DELIVEREDQTY_N',
        })
    public ITP_DELIVEREDQTY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'ITP_SUPPLIERID_C',
        })
    public ITP_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_ENGAGEMENTCODE_C',
        })
    public ITP_ENGAGEMENTCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'ITP_QUANTIFTYPE_C',
        })
    public ITP_QUANTIFTYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_QUANTIFHEADER_N',
        })
    public ITP_QUANTIFHEADER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_PULLHEADER_N',
        })
    public ITP_PULLHEADER_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_PULLFROMDATE_DAT',
        })
    public ITP_PULLFROMDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_PULLUNTILDATE_DAT',
        })
    public ITP_PULLUNTILDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'ITP_ACTIONCOM_C',
        })
    public ITP_ACTIONCOM_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_FOLDERWEEK_N',
        })
    public ITP_FOLDERWEEK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_FOLDERYEAR_N',
        })
    public ITP_FOLDERYEAR_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_ACTIONTYPE_C',
        })
    public ITP_ACTIONTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_FLAGCOLIS_C',
        })
    public ITP_FLAGCOLIS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'ITP_ORDERNUMBER_C',
        })
    public ITP_ORDERNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_ANNOUNCED_C',
        })
    public ITP_ANNOUNCED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_ANNOUNCEDDATE_DAT',
        })
    public ITP_ANNOUNCEDDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'ITP_ANNOUNCEDSHIPPINGUNIT_D',
        })
    public ITP_ANNOUNCEDSHIPPINGUNIT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_ORDEREDQTY_N',
        })
    public ITP_ORDEREDQTY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_FIRSTDELIVEREDQTY_N',
        })
    public ITP_FIRSTDELIVEREDQTY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ITP_IDNUMBER_REG_C',
        })
    public ITP_IDNUMBER_REG_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'ITP_SHIPPINGUNIT_REG_D',
        })
    public ITP_SHIPPINGUNIT_REG_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_PREMARQUAGE_REG_C',
        })
    public ITP_PREMARQUAGE_REG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_PREMARQUAGE_PROMO_C',
        })
    public ITP_PREMARQUAGE_PROMO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ITP_FOLDERTYPE_C',
        })
    public ITP_FOLDERTYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_TIPALETTE_N',
        })
    public ITP_TIPALETTE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_HIPALETTE_N',
        })
    public ITP_HIPALETTE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ITP_COEFFRNDPAL_D',
        })
    public ITP_COEFFRNDPAL_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ITP_RNDPALFLAG_C',
        })
    public ITP_RNDPALFLAG_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_BENCHMARK1_DAT',
        })
    public ITP_BENCHMARK1_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_BENCHMARK2_DAT',
        })
    public ITP_BENCHMARK2_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_BENCHMARK3_DAT',
        })
    public ITP_BENCHMARK3_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ITP_LAYOUT_C',
        })
    public ITP_LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'ITP_MECHANICSID_C',
        })
    public ITP_MECHANICSID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'ITP_MECHANICSDESC_C',
        })
    public ITP_MECHANICSDESC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ITP_PUBLICATIONTYPE_C',
        })
    public ITP_PUBLICATIONTYPE_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'ITP_HIERARCHY_N',
        })
    public ITP_HIERARCHY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ITP_DECREASEAUTH_C',
        })
    public ITP_DECREASEAUTH_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'ITP_SAPREFERENCE_C',
        })
    public ITP_SAPREFERENCE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'ITP_MAINCOLIEAN_C',
        })
    public ITP_MAINCOLIEAN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ITP_PAYMENTORIGINE_C',
        })
    public ITP_PAYMENTORIGINE_C: string | null;

}
