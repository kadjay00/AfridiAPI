import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SHIPPING_NOTES_LINE', {schema: 'dbo' } )
@Index('IDX_SHIPNOTELINE01', ['SHL_SHIPPINGNOTE_N', 'SHL_IDNUMBER_C'])
@Index('ix_idnumber', ['SHL_IDNUMBER_C'])
@Index('ix_order_idnumber', ['SHL_ORDER_IDNUMBER_C'])
export class T_SHIPPING_NOTES_LINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SHL_SHIPPINGNOTE_N',
        })
    public SHL_SHIPPINGNOTE_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'SHL_SEQUENCE_N',
        })
    public SHL_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_DOCTYPE_C',
        })
    public SHL_DOCTYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_SUBDEPARTMENT_N',
        })
    public SHL_SUBDEPARTMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_DEPARTMENT_N',
        })
    public SHL_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SHL_GIBREF_C',
        })
    public SHL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SHL_ORDER_GIBREF_C',
        })
    public SHL_ORDER_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SHL_IDNUMBER_C',
        })
    public SHL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SHL_ORDER_IDNUMBER_C',
        })
    public SHL_ORDER_IDNUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_PROMOTIEWEEK_N',
        })
    public SHL_PROMOTIEWEEK_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SHL_ITEMDESCRIPFRA_C',
        })
    public SHL_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SHL_ITEMDESCRIPNED_C',
        })
    public SHL_ITEMDESCRIPNED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_COLLIS_D',
        })
    public SHL_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_ORDER_COLLIS_D',
        })
    public SHL_ORDER_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SHL_SHIPPINGUNIT_D',
        })
    public SHL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SHL_ORDER_SHIPPINGUNIT_D',
        })
    public SHL_ORDER_SHIPPINGUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SHL_CURRENCY_C',
        })
    public SHL_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SHL_SALESPRICE_D',
        })
    public SHL_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'SHL_COSTPRICE_D',
        })
    public SHL_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'SHL_ORIGINAL_COSTPRICE_D',
        })
    public SHL_ORIGINAL_COSTPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_CHANGE_COSTPRICE_C',
        })
    public SHL_CHANGE_COSTPRICE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SHL_EMPTYUNITPRICE_D',
        })
    public SHL_EMPTYUNITPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'SHL_TAXPERCENTAGE_D',
        })
    public SHL_TAXPERCENTAGE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SHL_VOLUME_D',
        })
    public SHL_VOLUME_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_REASONCODE_C',
        })
    public SHL_REASONCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_ORIGINE_DOCTYPE_C',
        })
    public SHL_ORIGINE_DOCTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_ORIGINE_DOCNUMBER_N',
        })
    public SHL_ORIGINE_DOCNUMBER_N: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_ERROR_C',
        })
    public SHL_ERROR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_REFCORRECTION_C',
        })
    public SHL_REFCORRECTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_RESERVE_C',
        })
    public SHL_RESERVE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_COLLISCOUNTED_D',
        })
    public SHL_COLLISCOUNTED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SHL_COUNTUNIT_D',
        })
    public SHL_COUNTUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SHL_COUNTUNITCODE_C',
        })
    public SHL_COUNTUNITCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SHL_DELIVERYUNITCODE_C',
        })
    public SHL_DELIVERYUNITCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_STATUSRECEPTION_C',
        })
    public SHL_STATUSRECEPTION_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_COLLISCOUNTEDDEF_D',
        })
    public SHL_COLLISCOUNTEDDEF_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SHL_COUNTUNITDEF_D',
        })
    public SHL_COUNTUNITDEF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'SHL_DELTA_DELIVERED_D',
        })
    public SHL_DELTA_DELIVERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'SHL_DELTA_ORDER_D',
        })
    public SHL_DELTA_ORDER_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SSCC1_C',
        })
    public SHL_SSCC1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SSCC2_C',
        })
    public SHL_SSCC2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SSCC3_C',
        })
    public SHL_SSCC3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SHL_RECEPTIONNBR_C',
        })
    public SHL_RECEPTIONNBR_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_ACTIONTYPE_F_C',
        })
    public SHL_ACTIONTYPE_F_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_FOLDERWEEK_F_N',
        })
    public SHL_FOLDERWEEK_F_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_FOLDERYEAR_F_N',
        })
    public SHL_FOLDERYEAR_F_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SHL_GRPBUYERS_F_C',
        })
    public SHL_GRPBUYERS_F_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_FILLER_F_C',
        })
    public SHL_FILLER_F_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_ACTIONTYPE_NF_C',
        })
    public SHL_ACTIONTYPE_NF_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_FOLDERWEEK_NF_N',
        })
    public SHL_FOLDERWEEK_NF_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_FOLDERYEAR_NF_N',
        })
    public SHL_FOLDERYEAR_NF_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SHL_ACTIONCOM_NF_C',
        })
    public SHL_ACTIONCOM_NF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_QUANTIFTYPE_NF_C',
        })
    public SHL_QUANTIFTYPE_NF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'SHL_EAN_SELLINGUNIT_C',
        })
    public SHL_EAN_SELLINGUNIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 14,
        name: 'SHL_EAN_SHIPPINGUNIT_C',
        })
    public SHL_EAN_SHIPPINGUNIT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_ANNOUNCED_IDGESTION_D',
        })
    public SHL_ANNOUNCED_IDGESTION_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_DAMAGED_IDGESTION_D',
        })
    public SHL_DAMAGED_IDGESTION_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_SELLINGPRICE_IDGESTION_D',
        })
    public SHL_SELLINGPRICE_IDGESTION_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SHL_INVOICEPRICE_IDGESTION_D',
        })
    public SHL_INVOICEPRICE_IDGESTION_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 3,
        name: 'SHL_EMPTYUNIT_IDGESTION_D',
        })
    public SHL_EMPTYUNIT_IDGESTION_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_PDTCHECK_C',
        })
    public SHL_PDTCHECK_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SHL_ERRORNUMBER',
        })
    public SHL_ERRORNUMBER: number | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SUPPLIERREF_C',
        })
    public SHL_SUPPLIERREF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_CENTRALSTATUS_C',
        })
    public SHL_CENTRALSTATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_LOCALSTATUS_C',
        })
    public SHL_LOCALSTATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_LOCALSTATUSMOD_C',
        })
    public SHL_LOCALSTATUSMOD_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_SUPPLIERSEQUENCE_N',
        })
    public SHL_SUPPLIERSEQUENCE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SHL_SELLINGUNITCODE_C',
        })
    public SHL_SELLINGUNITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SHL_COLLIS_FREE_D',
        })
    public SHL_COLLIS_FREE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHL_ORDERDATE_DAT',
        })
    public SHL_ORDERDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHL_DELIVERYDATE_DAT',
        })
    public SHL_DELIVERYDATE_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SHL_SHNORIGRECEPTION_N',
        })
    public SHL_SHNORIGRECEPTION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SHL_SHNSTATUS_C',
        })
    public SHL_SHNSTATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SHL_BR_INIT_C',
        })
    public SHL_BR_INIT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_BAKID_N',
        })
    public SHL_BAKID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SHL_DISPLAY_N',
        })
    public SHL_DISPLAY_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHL_DLUO_DAT',
        })
    public SHL_DLUO_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 14,
        name: 'SHL_LOT_NUMBER_C',
        })
    public SHL_LOT_NUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SHL_OPPORTUNITY_C',
        })
    public SHL_OPPORTUNITY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SHL_PP_C',
        })
    public SHL_PP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SHL_AUTOLOAD_C',
        })
    public SHL_AUTOLOAD_C: string | null;

}
