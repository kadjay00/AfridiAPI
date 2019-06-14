import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACELABEL_HISTO', {schema: 'dbo' } )
@Index('IX_INTERFACELABEL_HISTO_IDNUMB', ['LBH_IDNUMBER_C', 'LBH_PRINTDATE_DAT'])
export class T_INTERFACELABEL_HISTO {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'LBH_IDENTITY_D',
        })
    public LBH_IDENTITY_D: number;

    @Column('datetime', {
        nullable: false,
        name: 'LBH_PRINTDATE_DAT',
        })
    public LBH_PRINTDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'LBH_IDNUMBER_C',
        })
    public LBH_IDNUMBER_C: string;

    @Column('char', {
        nullable: true,
        name: 'LBH_STATUS_C',
        })
    public LBH_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LBH_STATUSDATE_DAT',
        })
    public LBH_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LBH_USERID_C',
        })
    public LBH_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LBH_LABELTYPE_C',
        })
    public LBH_LABELTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_REASONCODE_C',
        })
    public LBH_REASONCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LBH_REPRISE_DAT',
        })
    public LBH_REPRISE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_DEPARTMENT_N',
        })
    public LBH_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'LBH_GIBREF_C',
        })
    public LBH_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBH_SALESGROUP_C',
        })
    public LBH_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBH_SALESFAMILY_C',
        })
    public LBH_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBH_SALESSUBFAMILY_C',
        })
    public LBH_SALESSUBFAMILY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_LABELQUANTITY_N',
        })
    public LBH_LABELQUANTITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_ITEMDESCRIPNED_C',
        })
    public LBH_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_ITEMDESCRIPFRA_C',
        })
    public LBH_ITEMDESCRIPFRA_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBH_EMPTYUNITPRICE_D',
        })
    public LBH_EMPTYUNITPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBH_ACTIVESELLINGPRICE_D',
        })
    public LBH_ACTIVESELLINGPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_ACTIVEPROFITCODE_C',
        })
    public LBH_ACTIVEPROFITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'LBH_ACTIVEPROFITPERCENT_D',
        })
    public LBH_ACTIVEPROFITPERCENT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_CATDESCRIPNED_C',
        })
    public LBH_CATDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_CATDESCRIPFRA_C',
        })
    public LBH_CATDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_ORIGINEDESCRIPNED_C',
        })
    public LBH_ORIGINEDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_ORIGINEDESCRIPFRA_C',
        })
    public LBH_ORIGINEDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_SELUNITDESCRIPNED_C',
        })
    public LBH_SELUNITDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_SELUNITDESCRIPFRA_C',
        })
    public LBH_SELUNITDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_CURRENCYDESCRIPNED_C',
        })
    public LBH_CURRENCYDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_CURRENCYDESCRIPFRA_C',
        })
    public LBH_CURRENCYDESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_DELIVERYCODE_C',
        })
    public LBH_DELIVERYCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'LBH_SHIPPINGUNIT_D',
        })
    public LBH_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'LBH_CABCOEFF_D',
        })
    public LBH_CABCOEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_CABCODEDESCRIP_C',
        })
    public LBH_CABCODEDESCRIP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'LBH_PAGELINE_C',
        })
    public LBH_PAGELINE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_FACING_N',
        })
    public LBH_FACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_ORDERPOINT_N',
        })
    public LBH_ORDERPOINT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_AVERAGEWEEK_N',
        })
    public LBH_AVERAGEWEEK_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_LANGUAGECODE_C',
        })
    public LBH_LANGUAGECODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LBH_BARCODE_C',
        })
    public LBH_BARCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBH_EUROSELLINGPRICE_D',
        })
    public LBH_EUROSELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBH_EUROEMPTYUNITPRICE_D',
        })
    public LBH_EUROEMPTYUNITPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_TAXCODE_C',
        })
    public LBH_TAXCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBH_EUROCABPRICE_D',
        })
    public LBH_EUROCABPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBH_CABPRICE_D',
        })
    public LBH_CABPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBH_ITEMDESCRIPUNILANGUAGE_C',
        })
    public LBH_ITEMDESCRIPUNILANGUAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'LBH_PLANO_C',
        })
    public LBH_PLANO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LBH_PRICECURRENCY_C',
        })
    public LBH_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_STATUSPDC_C',
        })
    public LBH_STATUSPDC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LBH_REFGESTION_C',
        })
    public LBH_REFGESTION_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_HORFACING_N',
        })
    public LBH_HORFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_VERFACING_N',
        })
    public LBH_VERFACING_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'LBH_EANCODE_N',
        })
    public LBH_EANCODE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_PRIXPROMO_C',
        })
    public LBH_PRIXPROMO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_NUMBER1_C',
        })
    public LBH_NUMBER1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_PRIXSENSIBLE_C',
        })
    public LBH_PRIXSENSIBLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_GUELDAGE_C',
        })
    public LBH_GUELDAGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_CENTRALSUPCODE_C',
        })
    public LBH_CENTRALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_SUPPRTEMP_C',
        })
    public LBH_SUPPRTEMP_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'LBH_SALESCOEFF_D',
        })
    public LBH_SALESCOEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LBH_UNIVERS_C',
        })
    public LBH_UNIVERS_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_METIER_N',
        })
    public LBH_METIER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LBH_SUBDEPARTMENT_N',
        })
    public LBH_SUBDEPARTMENT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_ASSORTMENT_C',
        })
    public LBH_ASSORTMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LBH_CHARACTARISTIC_C',
        })
    public LBH_CHARACTARISTIC_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LBL_PREVIOUSPRICE_D',
        })
    public LBL_PREVIOUSPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LBH_PAV_C',
        })
    public LBH_PAV_C: string | null;

}
