import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDERLINE_DEF', {schema: 'dbo' } )
@Index('IDX_ORL_IDNUMBER', ['ORL_IDNUMBER_C'])
@Index('IDX_ORL_PK_IDNUMBER', ['ORL_STOREID_C', 'ORL_YEAR_N', 'ORL_ORDERID_N', 'ORL_IDNUMBER_C'])
export class T_ORDERLINE_DEF {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'ORL_STOREID_C',
        })
    public ORL_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORL_YEAR_N',
        })
    public ORL_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORL_ORDERID_N',
        })
    public ORL_ORDERID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'ORL_RECORD_N',
        })
    public ORL_RECORD_N: number;

    @Column('int', {
        nullable: true,
        name: 'ORL_DEPARTMENT_N',
        })
    public ORL_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ORL_GIBREF_C',
        })
    public ORL_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_COLLIS_ORIG_D',
        })
    public ORL_COLLIS_ORIG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_COLLIS_D',
        })
    public ORL_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_COLLIS_FREE_D',
        })
    public ORL_COLLIS_FREE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_COLLIS_DELIV_D',
        })
    public ORL_COLLIS_DELIV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_COLLIS_QUANTIF_D',
        })
    public ORL_COLLIS_QUANTIF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORL_ITEMDESCRIPFRA_C',
        })
    public ORL_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORL_ITEMDESCRIPNED_C',
        })
    public ORL_ITEMDESCRIPNED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'ORL_SHIPPINGUNIT_D',
        })
    public ORL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_SALESPRICE_D',
        })
    public ORL_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORL_COSTPRICE_D',
        })
    public ORL_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ORL_PROFITPERCENT_D',
        })
    public ORL_PROFITPERCENT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'ORL_TAXPERCENTAGE_D',
        })
    public ORL_TAXPERCENTAGE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'ORL_DOCTYPE_C',
        })
    public ORL_DOCTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'ORL_REASONCODE_C',
        })
    public ORL_REASONCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ORL_CURRENCY_C',
        })
    public ORL_CURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_STATUS_C',
        })
    public ORL_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORL_STATUSDATE_DAT',
        })
    public ORL_STATUSDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'ORL_SESSION_N',
        })
    public ORL_SESSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORL_IDNUMBER_C',
        })
    public ORL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'ORL_SUPPLIERID_C',
        })
    public ORL_SUPPLIERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORL_EXPDELIVERY_DAT',
        })
    public ORL_EXPDELIVERY_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'ORL_EAN_N',
        })
    public ORL_EAN_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ORL_BONBASE_C',
        })
    public ORL_BONBASE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ORL_SUPPLIERREF_C',
        })
    public ORL_SUPPLIERREF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_CHANGE_ALLOWED_C',
        })
    public ORL_CHANGE_ALLOWED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORL_INTRO_DAT',
        })
    public ORL_INTRO_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORL_USER_INTRO_C',
        })
    public ORL_USER_INTRO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_CHANGED_QUANT_C',
        })
    public ORL_CHANGED_QUANT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 14,
        name: 'ORL_PDTREFERENCE_C',
        })
    public ORL_PDTREFERENCE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORL_SUBDEPARTMENT_N',
        })
    public ORL_SUBDEPARTMENT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_COLLIS_NONDELIV_D',
        })
    public ORL_COLLIS_NONDELIV_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_PDTMODIFIED_C',
        })
    public ORL_PDTMODIFIED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_AUTOPRINT_C',
        })
    public ORL_AUTOPRINT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_PRINTED_C',
        })
    public ORL_PRINTED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'ORL_ORDERLINESOURCE_C',
        })
    public ORL_ORDERLINESOURCE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORL_ITEMORDERID_N',
        })
    public ORL_ITEMORDERID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ORL_SESSION_TYPE_C',
        })
    public ORL_SESSION_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'ORL_LOGISTICGROUP_C',
        })
    public ORL_LOGISTICGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORL_IDNUMBERORIG_C',
        })
    public ORL_IDNUMBERORIG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_SHIPPINGONE_C',
        })
    public ORL_SHIPPINGONE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_BAKEOFF_C',
        })
    public ORL_BAKEOFF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_ALLOTICOLLIS_D',
        })
    public ORL_ALLOTICOLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_ALLOTICOLLIS_FREE_D',
        })
    public ORL_ALLOTICOLLIS_FREE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORL_SESSION2_N',
        })
    public ORL_SESSION2_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORL_SESSION3_N',
        })
    public ORL_SESSION3_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ORL_PP_C',
        })
    public ORL_PP_C: string | null;

}
