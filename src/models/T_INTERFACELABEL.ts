import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACELABEL', {schema: 'dbo' } )
export class T_INTERFACELABEL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'LBL_TRIGGERCODE_C',
        })
    public LBL_TRIGGERCODE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'LBL_IDNUMBER_C',
        })
    public LBL_IDNUMBER_C: string;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'LBL_SEQUENCENBR_N',
        })
    public LBL_SEQUENCENBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'LBL_DEPARTMENT_N',
        })
    public LBL_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'LBL_GIBREF_C',
        })
    public LBL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBL_SALESGROUP_C',
        })
    public LBL_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBL_SALESFAMILY_C',
        })
    public LBL_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBL_SALESSUBFAMILY_C',
        })
    public LBL_SALESSUBFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LBL_LABELTYPE_C',
        })
    public LBL_LABELTYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_LABELQUANTITY_N',
        })
    public LBL_LABELQUANTITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_ITEMDESCRIPNED_C',
        })
    public LBL_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_ITEMDESCRIPFRA_C',
        })
    public LBL_ITEMDESCRIPFRA_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_EMPTYUNITPRICE_D',
        })
    public LBL_EMPTYUNITPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_ACTIVESELLINGPRICE_D',
        })
    public LBL_ACTIVESELLINGPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_ACTIVEPROFITCODE_C',
        })
    public LBL_ACTIVEPROFITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'LBL_ACTIVEPROFITPERCENT_D',
        })
    public LBL_ACTIVEPROFITPERCENT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_CATDESCRIPNED_C',
        })
    public LBL_CATDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_CATDESCRIPFRA_C',
        })
    public LBL_CATDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_ORIGINEDESCRIPNED_C',
        })
    public LBL_ORIGINEDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_ORIGINEDESCRIPFRA_C',
        })
    public LBL_ORIGINEDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_SELUNITDESCRIPNED_C',
        })
    public LBL_SELUNITDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_SELUNITDESCRIPFRA_C',
        })
    public LBL_SELUNITDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_CURRENCYDESCRIPNED_C',
        })
    public LBL_CURRENCYDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_CURRENCYDESCRIPFRA_C',
        })
    public LBL_CURRENCYDESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_DELIVERYCODE_C',
        })
    public LBL_DELIVERYCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'LBL_SHIPPINGUNIT_D',
        })
    public LBL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'LBL_CABCOEFF_D',
        })
    public LBL_CABCOEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_CABCODEDESCRIP_C',
        })
    public LBL_CABCODEDESCRIP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'LBL_PAGELINE_C',
        })
    public LBL_PAGELINE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_FACING_N',
        })
    public LBL_FACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_ORDERPOINT_N',
        })
    public LBL_ORDERPOINT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_AVERAGEWEEK_N',
        })
    public LBL_AVERAGEWEEK_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_LANGUAGECODE_C',
        })
    public LBL_LANGUAGECODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_REASONCODE_C',
        })
    public LBL_REASONCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LBL_BARCODE_C',
        })
    public LBL_BARCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_EUROSELLINGPRICE_D',
        })
    public LBL_EUROSELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_EUROEMPTYUNITPRICE_D',
        })
    public LBL_EUROEMPTYUNITPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_TAXCODE_C',
        })
    public LBL_TAXCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_EUROCABPRICE_D',
        })
    public LBL_EUROCABPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_CABPRICE_D',
        })
    public LBL_CABPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_ITEMDESCRIPUNILANGUAGE_C',
        })
    public LBL_ITEMDESCRIPUNILANGUAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'LBL_PLANO_C',
        })
    public LBL_PLANO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LBL_PRICECURRENCY_C',
        })
    public LBL_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_STATUSPDC_C',
        })
    public LBL_STATUSPDC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LBL_REFGESTION_C',
        })
    public LBL_REFGESTION_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_HORFACING_N',
        })
    public LBL_HORFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_VERFACING_N',
        })
    public LBL_VERFACING_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'LBL_EANCODE_N',
        })
    public LBL_EANCODE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_PRIXPROMO_C',
        })
    public LBL_PRIXPROMO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_NUMBER1_C',
        })
    public LBL_NUMBER1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_PRIXSENSIBLE_C',
        })
    public LBL_PRIXSENSIBLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LBL_GUELDAGE_C',
        })
    public LBL_GUELDAGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_CENTRALSUPCODE_C',
        })
    public LBL_CENTRALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_SUPPRTEMP_C',
        })
    public LBL_SUPPRTEMP_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'LBL_SALESCOEFF_D',
        })
    public LBL_SALESCOEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LBL_UNIVERS_C',
        })
    public LBL_UNIVERS_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_METIER_N',
        })
    public LBL_METIER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBL_SUBDEPARTMENT_N',
        })
    public LBL_SUBDEPARTMENT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_ASSORTMENT_C',
        })
    public LBL_ASSORTMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LBL_USERID_C',
        })
    public LBL_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LBL_CHARACTARISTIC_C',
        })
    public LBL_CHARACTARISTIC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_POSDESCRIPNED_C',
        })
    public LBL_POSDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBL_POSDESCRIPFRA_C',
        })
    public LBL_POSDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'LBL_SUPPLIERID_C',
        })
    public LBL_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'LBL_SUPPLIER_C',
        })
    public LBL_SUPPLIER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LBL_RELEASEDATE_DAT',
        })
    public LBL_RELEASEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LBL_INOUT_C',
        })
    public LBL_INOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LBL_CURRPRICEGROUPNED_C',
        })
    public LBL_CURRPRICEGROUPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LBL_CURRPRICEGROUPFRA_C',
        })
    public LBL_CURRPRICEGROUPFRA_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_PREVIOUSPRICE_D',
        })
    public LBL_PREVIOUSPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBL_PAV_C',
        })
    public LBL_PAV_C: string | null;

}
