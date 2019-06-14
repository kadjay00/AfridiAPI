import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CENTRALITEM', {schema: 'dbo' } )
export class T_CENTRALITEM {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'F1_SEQUENCENBR_N',
        })
    public F1_SEQUENCENBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'F1_SESSIONNBR_N',
        })
    public F1_SESSIONNBR_N: number | null;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'F1_IDNUMBER_C',
        })
    public F1_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'F1_DEPARTMENT_N',
        })
    public F1_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'F1_GIBREF_C',
        })
    public F1_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'F1_ITEMDESCRIPFRA_C',
        })
    public F1_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'F1_ITEMDESCRIPNED_C',
        })
    public F1_ITEMDESCRIPNED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'F1_SUBDEPARTMENT_N',
        })
    public F1_SUBDEPARTMENT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_CENTRALSUPCODE_C',
        })
    public F1_CENTRALSUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_CENTRALSUPDATE_DAT',
        })
    public F1_CENTRALSUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'F1_PRICECURRENCY_C',
        })
    public F1_PRICECURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'F1_ACTIVESELLINGPRICE_D',
        })
    public F1_ACTIVESELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_ACTIVECOSTPRICE_D',
        })
    public F1_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_ACTIVEPROFITPERCENT_D',
        })
    public F1_ACTIVEPROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_ACTIVEPROFITCODE_C',
        })
    public F1_ACTIVEPROFITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'F1_FUTURESELLINGPRICE_D',
        })
    public F1_FUTURESELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_FUTURECOSTPRICE_D',
        })
    public F1_FUTURECOSTPRICE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_FUTURESELLINGPRICEDATE_DAT',
        })
    public F1_FUTURESELLINGPRICEDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_FUTUREPROFITPERCENT_D',
        })
    public F1_FUTUREPROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_FUTUREPROFITCODE_C',
        })
    public F1_FUTUREPROFITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'F1_PROMOSELLINGPRICE_D',
        })
    public F1_PROMOSELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_PROMOCOSTPRICE_D',
        })
    public F1_PROMOCOSTPRICE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_PROMOSTARTDATE_DAT',
        })
    public F1_PROMOSTARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_PROMOENDDATE_DAT',
        })
    public F1_PROMOENDDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_PROMOPROFITPERCENT_D',
        })
    public F1_PROMOPROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_PROMOPROFITCODE_C',
        })
    public F1_PROMOPROFITCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'F1_POSDESCRIPNED_C',
        })
    public F1_POSDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'F1_POSDESCRIPFRA_C',
        })
    public F1_POSDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'F1_POSDESCRIPMUL_C',
        })
    public F1_POSDESCRIPMUL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'F1_SALESGROUP_C',
        })
    public F1_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'F1_SALESFAMILY_C',
        })
    public F1_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'F1_SALESSUBFAMILY',
        })
    public F1_SALESSUBFAMILY: string | null;

    @Column('int', {
        nullable: true,
        name: 'F1_PURCHCENTER_N',
        })
    public F1_PURCHCENTER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'F1_PURCHID_N',
        })
    public F1_PURCHID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'F1_EMPTYUNITPLU_N',
        })
    public F1_EMPTYUNITPLU_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'F1_CONSUMPTIONUNIT_D',
        })
    public F1_CONSUMPTIONUNIT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_TAXCODE_C',
        })
    public F1_TAXCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_BRAND_C',
        })
    public F1_BRAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_CHARACTARISTIC_C',
        })
    public F1_CHARACTARISTIC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_LABELTYPE_C',
        })
    public F1_LABELTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'F1_ORIGINE_C',
        })
    public F1_ORIGINE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_CATEGORY_C',
        })
    public F1_CATEGORY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'F1_SELLINGUNITCODE_C',
        })
    public F1_SELLINGUNITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'F1_CABCOEFF_D',
        })
    public F1_CABCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_CABCODE_C',
        })
    public F1_CABCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'F1_SHIPPINGUNIT_D',
        })
    public F1_SHIPPINGUNIT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_DELIVERYCODE_C',
        })
    public F1_DELIVERYCODE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'F1_DCCODE_N',
        })
    public F1_DCCODE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_ALCOHOL_C',
        })
    public F1_ALCOHOL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_ASSORTMENT_C',
        })
    public F1_ASSORTMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_TECHNICALCODE_C',
        })
    public F1_TECHNICALCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'F1_PRELABELED_D',
        })
    public F1_PRELABELED_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_INOUTCODE_C',
        })
    public F1_INOUTCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_INOUTSTARTDATE_DAT',
        })
    public F1_INOUTSTARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_INOUTENDDATE_DAT',
        })
    public F1_INOUTENDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'F1_PAGELINE_C',
        })
    public F1_PAGELINE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_SLOWMOVER_C',
        })
    public F1_SLOWMOVER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'F1_ACTIVITY_N',
        })
    public F1_ACTIVITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 11,
        name: 'F1_SUPPLIERID_C',
        })
    public F1_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'F1_SUPPLIERREF_C',
        })
    public F1_SUPPLIERREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_ECOTAXCODE_C',
        })
    public F1_ECOTAXCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'F1_BONBASE_C',
        })
    public F1_BONBASE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_FLAG14_C',
        })
    public F1_FLAG14_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_FLAG8_C',
        })
    public F1_FLAG8_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'F1_IDGESTION_C',
        })
    public F1_IDGESTION_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'F1_QTYCOEFF_D',
        })
    public F1_QTYCOEFF_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'F1_TIPALETTE_N',
        })
    public F1_TIPALETTE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'F1_HIPALETTE_N',
        })
    public F1_HIPALETTE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'F1_WEIGHT_D',
        })
    public F1_WEIGHT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'F1_MAXORDERQTY_N',
        })
    public F1_MAXORDERQTY_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'F1_POURCLOSS_D',
        })
    public F1_POURCLOSS_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_STARTPROMOPR_DAT',
        })
    public F1_STARTPROMOPR_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_ENDPROMOPR_DAT',
        })
    public F1_ENDPROMOPR_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_FUTURPR_DAT',
        })
    public F1_FUTURPR_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'F1_FRESHNESS_N',
        })
    public F1_FRESHNESS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'F1_PROMOVAR_C',
        })
    public F1_PROMOVAR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'F1_LINKREFGEST_C',
        })
    public F1_LINKREFGEST_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'F1_PALROUND_N',
        })
    public F1_PALROUND_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'F1_ORDERREF_C',
        })
    public F1_ORDERREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'F1_GRPLOGISTIC_C',
        })
    public F1_GRPLOGISTIC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_DELIVERYCODE2_C',
        })
    public F1_DELIVERYCODE2_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'F1_DEPOT2_N',
        })
    public F1_DEPOT2_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'F1_SHIPPINGUNIT2_D',
        })
    public F1_SHIPPINGUNIT2_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 11,
        name: 'F1_SUPPLIERID2_C',
        })
    public F1_SUPPLIERID2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_CANBEORDERED_C',
        })
    public F1_CANBEORDERED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'F1_PROMOID_C',
        })
    public F1_PROMOID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_INTROSUPFLAG_C',
        })
    public F1_INTROSUPFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_LISTINGREASON_C',
        })
    public F1_LISTINGREASON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_ARTICLETYPE_C',
        })
    public F1_ARTICLETYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_ARTICLECATEGORY_C',
        })
    public F1_ARTICLECATEGORY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_BASEASSORTMENT_C',
        })
    public F1_BASEASSORTMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_PRICEZONE_C',
        })
    public F1_PRICEZONE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 3,
        scale: 2,
        name: 'F1_COEFFPALETTE_D',
        })
    public F1_COEFFPALETTE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_SOURCESTAT_C',
        })
    public F1_SOURCESTAT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_TRANSFORMABLE_C',
        })
    public F1_TRANSFORMABLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'F1_DELIVERYDELAI_C',
        })
    public F1_DELIVERYDELAI_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_SCALEITEM_C',
        })
    public F1_SCALEITEM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'F1_ITEMPACKTYPE_C',
        })
    public F1_ITEMPACKTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'F1_CALIBER_C',
        })
    public F1_CALIBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'F1_ITEMAVGWEIGHT_D',
        })
    public F1_ITEMAVGWEIGHT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'F1_OPPORTUNITY_C',
        })
    public F1_OPPORTUNITY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_PRMP_D',
        })
    public F1_PRMP_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'F1_PRICEGROUP_C',
        })
    public F1_PRICEGROUP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_CDRELEASE_DAT',
        })
    public F1_CDRELEASE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'F1_PERMREDSTART_C',
        })
    public F1_PERMREDSTART_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'F1_PERMREDEND_C',
        })
    public F1_PERMREDEND_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_PERMREDTYPE_C',
        })
    public F1_PERMREDTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_PERMREDLABEL_C',
        })
    public F1_PERMREDLABEL_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_GUELTAGE_D',
        })
    public F1_GUELTAGE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_FLAGRETOUR_C',
        })
    public F1_FLAGRETOUR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'F1_MANDATORYASSORT_C',
        })
    public F1_MANDATORYASSORT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_MINDEPTHFACING_D',
        })
    public F1_MINDEPTHFACING_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_MINDEPTHFACINGAPPDATE_DAT',
        })
    public F1_MINDEPTHFACINGAPPDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_COEFFVARLOCART_D',
        })
    public F1_COEFFVARLOCART_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_CVLAPERIODSTART_DAT',
        })
    public F1_CVLAPERIODSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_CVLAPERIODEND_DAT',
        })
    public F1_CVLAPERIODEND_DAT: Date | null;

    @Column('smallint', {
        nullable: true,
        name: 'F1_NUMSALESDAYS_N',
        })
    public F1_NUMSALESDAYS_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'F1_NUMSALESDAYSAPPDATE_DAT',
        })
    public F1_NUMSALESDAYSAPPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'F1_SUPPLIERID13_C',
        })
    public F1_SUPPLIERID13_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_ESHOPTYPE_C',
        })
    public F1_ESHOPTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_ESHOPACT_C',
        })
    public F1_ESHOPACT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'F1_PAV_C',
        })
    public F1_PAV_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'F1_SUPPLIERRETOUR_C',
        })
    public F1_SUPPLIERRETOUR_C: string | null;

    @Column('char', {
        nullable: true,
        length: 9,
        name: 'F1_IDNUMBER_SAP_C',
        })
    public F1_IDNUMBER_SAP_C: string | null;

    @Column('char', {
        nullable: true,
        length: 6,
        name: 'F1_SUPPLIERID_SAP_C',
        })
    public F1_SUPPLIERID_SAP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'F1_RECONDUCTION_NOTION_C',
        })
    public F1_RECONDUCTION_NOTION_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'F1_SHIPPINGUNIT_STD_D',
        })
    public F1_SHIPPINGUNIT_STD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_COSTPRICE_STD_D',
        })
    public F1_COSTPRICE_STD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_COSTPRICE_STD_FUT_D',
        })
    public F1_COSTPRICE_STD_FUT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'F1_COSTPRICE_STD_PROMO_D',
        })
    public F1_COSTPRICE_STD_PROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'F1_COEFFPP_D',
        })
    public F1_COEFFPP_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'F1_INDISPENSABLE_C',
        })
    public F1_INDISPENSABLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'F1_ECOCHEQUE_C',
        })
    public F1_ECOCHEQUE_C: string | null;

}
