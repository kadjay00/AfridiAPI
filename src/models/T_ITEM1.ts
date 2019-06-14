import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {T_ITEM2} from './T_ITEM2';
import {T_EANCODE} from './T_EANCODE';
import {T_ITEM3} from './T_ITEM3';

@Entity('T_ITEM1', {schema: 'dbo' } )
@Index('IDX_CENTRALSUPDAT', ['centralSupDate'])
@Index('IX_ITEM1_BRANDDEPSHY', ['brand', 'department', 'salesGroup', 'salesSubFamily', 'salesFamily'])
@Index('IX_ITEM1_CONNECTEDITEM', ['connItem'])
@Index('IX_ITEM1_DEPGIBREF', ['department', 'gibref'])
@Index('IX_ITEM1_DEPSDEPSHY', ['department', 'subdepartment', 'salesGroup', 'salesFamily', 'salesSubFamily'])
@Index('IX_ITEM1_DEPSHY', ['department', 'salesGroup', 'salesFamily', 'salesSubFamily'])
@Index('IX_ITEM1_ITEMINTRO', ['intro'])
@Index('IX_ITEM1_SDEPSHY', ['subdepartment', 'salesGroup', 'salesFamily', 'salesSubFamily'])
@Index('IX_SUPCODE', ['centralSupCode', 'centralSupDate', 'localSupDate', 'intro', 'lastSale'])
export class T_ITEM1 {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IT1_IDNUMBER_C',
        })
    public idnumber: string;

    @Column('int', {
        nullable: false,
        name: 'IT1_DEPARTMENT_N',
        })
    public department: number;

    @Column('varchar', {
        nullable: false,
        length: 7,
        name: 'IT1_GIBREF_C',
        })
    public gibref: string;

    @Column('int', {
        nullable: false,
        name: 'IT1_SUBDEPARTMENT_N',
        })
    public subdepartment: number;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'IT1_SELLINGUNITCODE_C',
        })
    public sellingunitcode: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IT1_ORIGINE_C',
        })
    public origin: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_CATEGORY_C',
        })
    public category: string | null;

    @Column('char', {
        nullable: false,
        name: 'IT1_DELIVERYCODE_C',
        })
    public deliveryCode: string;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT1_BRAND_C',
        })
    public brand: string | null;

    @Column('char', {
        nullable: false,
        name: 'IT1_TAXCODE_C',
        })
    public taxCode: string;

    @Column('char', {
        nullable: true,
        name: 'IT1_CABCODE_C',
        })
    public cabCode: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_ALCOHOL_C',
        })
    public alcohol: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'IT1_SALESGROUP_C',
        })
    public salesGroup: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'IT1_SALESFAMILY_C',
        })
    public salesFamily: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'IT1_SALESSUBFAMILY',
        })
    public salesSubFamily: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT1_CHARACTARISTIC_C',
        })
    public characteristic: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT1_LABELTYPE_C',
        })
    public labelType: string | null;

    @Column('varchar', {
        select: false,
        nullable: true,
        length: 3,
        name: 'IT1_PRICECURRENCY_C',
        })
    public priceCurrency: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IT1_ITEMDESCRIPNED_C',
        })
    public description: string | null;

    @Column('varchar', {
        select: false,
        nullable: true,
        length: 30,
        name: 'IT1_ITEMDESCRIPFRA_C',
        })
    public IT1_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IT1_POSDESCRIPNED_C',
        })
    public posDescription: string | null;

    @Column('varchar', {
        select: false,
        nullable: true,
        length: 30,
        name: 'IT1_POSDESCRIPFRA_C',
        })
    public IT1_POSDESCRIPFRA_C: string | null;

    @Column('varchar', {
        select: false,
        nullable: true,
        length: 30,
        name: 'IT1_POSDESCRIPMUL_C',
        })
    public IT1_POSDESCRIPMUL_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'IT1_CABCOEFF_D',
        })
    public cabCoeff: number | null;

    @Column('int', {
        select: false,
        nullable: true,
        name: 'IT1_LABELQUANTITY_N',
        })
    public labelQuantity: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT1_EMPTYUNITPLU_N',
        })
    public IT1_EMPTYUNITPLU_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_ASSORTMENT_C',
        })
    public assortment: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IT1_PRELABELED_D',
        })
    public prelabeled: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'IT1_CONSUMPTIONUNIT_D',
        })
    public consumptionUnit: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'IT1_SHIPPINGUNIT_D',
        })
    public shippingUnit: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT1_DCCODE_N',
        })
    public dcCode: number | null;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'IT1_ACTIVESELLINGPRICE_D',
        })
    public activeSellingPrice: number;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IT1_ACTIVECOSTPRICE_D',
        })
    public activeCostPrice: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT1_ACTIVEPROFITPERCENT_D',
        })
    public activeProfit: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_ACTIVEPROFITCODE_C',
        })
    public activeProfitCode: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'IT1_CONNECTEDITEM_N',
        })
    public connItem: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_ITEMINTRO_DAT',
        })
    public intro: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_CENTRALUPDATE_DAT',
        })
    public centralUpdate: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_LOCALUPDATE_DAT',
        })
    public localUpdate: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_CENTRALSUPCODE_C',
        })
    public centralSupCode: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_CENTRALSUPDATE_DAT',
        })
    public centralSupDate: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_LOCALSUPCODE_C',
        })
    public localSupCode: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_LOCALSUPDATE_DAT',
        })
    public localSupDate: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_LASTSALEDATE_DAT',
        })
    public lastSale: Date | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG1_C',
        })
    public IT1_FLAG1_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG2_C',
        })
    public IT1_FLAG2_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG3_C',
        })
    public IT1_FLAG3_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG4_C',
        })
    public IT1_FLAG4_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG5_C',
        })
    public IT1_FLAG5_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG6_C',
        })
    public IT1_FLAG6_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG7_C',
        })
    public IT1_FLAG7_C: string | null;

    @Column('char', {
        select: false,
        nullable: true,
        name: 'IT1_FLAG8_C',
        })
    public IT1_FLAG8_C: string | null;

    @Column('varchar', {
        select: false,
        nullable: true,
        length: 8,
        name: 'IT1_USERID_C',
        })
    public IT1_USERID_C: string | null;

    @Column('timestamp', {
        select: false,
        nullable: true,
        name: 'IT1_LASTUPDATE_TS',
        })
    public IT1_LASTUPDATE_TS: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_ACTIVATION_DAT',
        })
    public activated: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'IT1_PROMOTIONID_C',
        })
    public IT1_PROMOTIONID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_INTROSUPFLAG_C',
        })
    public IT1_INTROSUPFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_LISTINGREASON_C',
        })
    public IT1_LISTINGREASON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT1_ARTICLETYPE_C',
        })
    public IT1_ARTICLETYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT1_ARTICLECATEGORY_C',
        })
    public IT1_ARTICLECATEGORY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT1_PRICEZONE_C',
        })
    public IT1_PRICEZONE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_SOURCESTAT_C',
        })
    public IT1_SOURCESTAT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_TRANSFORMABLE_C',
        })
    public IT1_TRANSFORMABLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IT1_DELIVERYDELAI_C',
        })
    public IT1_DELIVERYDELAI_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_SCALEITEM_C',
        })
    public IT1_SCALEITEM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'IT1_ITEMPACKTYPE_C',
        })
    public IT1_ITEMPACKTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'IT1_CALIBER_C',
        })
    public IT1_CALIBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'IT1_ITEMAVGWEIGHT_D',
        })
    public IT1_ITEMAVGWEIGHT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_OPPORTUNITY_C',
        })
    public IT1_OPPORTUNITY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IT1_CENTRALSELLINGPRICE_D',
        })
    public IT1_CENTRALSELLINGPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'IT1_MANDATORYASSORT_C',
        })
    public IT1_MANDATORYASSORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_ESHOPTYPE_C',
        })
    public IT1_ESHOPTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_ESHOPACT_C',
        })
    public IT1_ESHOPACT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_PAV_C',
        })
    public IT1_PAV_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IT1_LABELQUANTITY_CENTRAL_N',
        })
    public IT1_LABELQUANTITY_CENTRAL_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IT1_LABELQUANTITY_USERID_C',
        })
    public IT1_LABELQUANTITY_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT1_LABELQUANTITY_UPDATE_DAT',
        })
    public IT1_LABELQUANTITY_UPDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        length: 9,
        name: 'IT1_IDNUMBER_SAP_C',
        })
    public IT1_IDNUMBER_SAP_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'IT1_SHIPPINGUNIT_STD_D',
        })
    public IT1_SHIPPINGUNIT_STD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IT1_COSTPRICE_STD_D',
        })
    public IT1_COSTPRICE_STD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IT1_COSTPRICE_STD_FUT_D',
        })
    public IT1_COSTPRICE_STD_FUT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'IT1_COSTPRICE_STD_PROMO_D',
        })
    public IT1_COSTPRICE_STD_PROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT1_COEFFPP_D',
        })
    public IT1_COEFFPP_D: number | null;

    @OneToMany(type => T_EANCODE, ean => ean.item1)
    @JoinColumn({name: 'IT1_IDNUMBER_C'})
    public eans: T_EANCODE[];

     @OneToOne(type => T_ITEM2, item2 => item2.idNumber, {eager: true})
     @JoinColumn({name: 'IT1_IDNUMBER_C'})
     public item2: T_ITEM2;

    @OneToOne(type => T_ITEM3, item3 => item3.idNumber, {eager: true})
    @JoinColumn({name: 'IT1_IDNUMBER_C'})
    public item3: T_ITEM3;

}
