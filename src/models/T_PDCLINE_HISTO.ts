import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDCLINE_HISTO', {schema: 'dbo' } )
@Index('IX_PDL_IDNUMBER', ['PDL_IDNUMBER_C'])
export class T_PDCLINE_HISTO {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PDL_PDCNUMBER_N',
        })
    public PDL_PDCNUMBER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PDL_IDNUMBER_C',
        })
    public PDL_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'PDL_SORTORDER_N',
        })
    public PDL_SORTORDER_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_VARTYPE_C',
        })
    public PDL_VARTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PDL_GIBREF_C',
        })
    public PDL_GIBREF_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PDL_EANCODE_N',
        })
    public PDL_EANCODE_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_LASTSALEDATE_DAT',
        })
    public PDL_LASTSALEDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_ITEMINTRO_DAT',
        })
    public PDL_ITEMINTRO_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_CENTRALSUPDATE_DAT',
        })
    public PDL_CENTRALSUPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_LOCALSUPDATE_DAT',
        })
    public PDL_LOCALSUPDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_REALSALE_D',
        })
    public PDL_REALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_AVERAGESALE_D',
        })
    public PDL_AVERAGESALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_CONSIDEREDSALE_D',
        })
    public PDL_CONSIDEREDSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_INITIALCONSSALE_D',
        })
    public PDL_INITIALCONSSALE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_PASTPROMO_C',
        })
    public PDL_PASTPROMO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_FUTUREPROMO_C',
        })
    public PDL_FUTUREPROMO_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_PROMOSTART_DAT',
        })
    public PDL_PROMOSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_PROMOEND_DAT',
        })
    public PDL_PROMOEND_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_COEFFSEASON_D',
        })
    public PDL_COEFFSEASON_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_COEFFEXCEPT_D',
        })
    public PDL_COEFFEXCEPT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_QTYCOEFF_D',
        })
    public PDL_QTYCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_COEFFVARLOCART_D',
        })
    public PDL_COEFFVARLOCART_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_BLOCKCOEFFVARLOCART_C',
        })
    public PDL_BLOCKCOEFFVARLOCART_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_INITIALCOEFFVARLOCART_D',
        })
    public PDL_INITIALCOEFFVARLOCART_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_COEFFVARLOCCOM_D',
        })
    public PDL_COEFFVARLOCCOM_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_INITIALCOEFFVARLOCCOM_D',
        })
    public PDL_INITIALCOEFFVARLOCCOM_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_USEDCOEFF_D',
        })
    public PDL_USEDCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_INITIALUSEDCOEFF_D',
        })
    public PDL_INITIALUSEDCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_SALESTOCK_D',
        })
    public PDL_SALESTOCK_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_HORFACING_N',
        })
    public PDL_HORFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_VERTFACING_N',
        })
    public PDL_VERTFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_TIPALETTE_N',
        })
    public PDL_TIPALETTE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_HIPALETTE_N',
        })
    public PDL_HIPALETTE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_COEFFRNDPAL_D',
        })
    public PDL_COEFFRNDPAL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_STOCKVARSALE_D',
        })
    public PDL_STOCKVARSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_STOCKAVAILABLE_D',
        })
    public PDL_STOCKAVAILABLE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_STOCKPERIOD_D',
        })
    public PDL_STOCKPERIOD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_QTYOPENORDERS_D',
        })
    public PDL_QTYOPENORDERS_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_OPENORDERSDELIVERY_DAT',
        })
    public PDL_OPENORDERSDELIVERY_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_QTYPROPOSED_D',
        })
    public PDL_QTYPROPOSED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_INITIALQTYPROPOSED_D',
        })
    public PDL_INITIALQTYPROPOSED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_QTYORDERED_D',
        })
    public PDL_QTYORDERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_INITIALQTYORDERED_D',
        })
    public PDL_INITIALQTYORDERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_QTYRNDPAL_D',
        })
    public PDL_QTYRNDPAL_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDL_IDCOMMANDE_C',
        })
    public PDL_IDCOMMANDE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'PDL_SHIPPINGUNIT_D',
        })
    public PDL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PDL_ACTIVECOSTPRICE_D',
        })
    public PDL_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_GLOBALREALSALES_D',
        })
    public PDL_GLOBALREALSALES_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_GLOBALSTOCK_D',
        })
    public PDL_GLOBALSTOCK_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_RNDPAL_C',
        })
    public PDL_RNDPAL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_ZEROSALES_C',
        })
    public PDL_ZEROSALES_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_ABNORMALSALES_C',
        })
    public PDL_ABNORMALSALES_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_NEWARTICLE_C',
        })
    public PDL_NEWARTICLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_DELETEDARTICLE_C',
        })
    public PDL_DELETEDARTICLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_OUTOFSTOCK_C',
        })
    public PDL_OUTOFSTOCK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_ABNORMALSTOCK_C',
        })
    public PDL_ABNORMALSTOCK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_ABNORMALFACING_C',
        })
    public PDL_ABNORMALFACING_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_PDCMODIFIED_C',
        })
    public PDL_PDCMODIFIED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_PALCONTENTGEST_D',
        })
    public PDL_PALCONTENTGEST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_RNDPALGEST_D',
        })
    public PDL_RNDPALGEST_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_DELIVERYCODE_C',
        })
    public PDL_DELIVERYCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDL_USERID_C',
        })
    public PDL_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_MODIFIED_DAT',
        })
    public PDL_MODIFIED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_FLAGCOEFFVARLOCCOM_C',
        })
    public PDL_FLAGCOEFFVARLOCCOM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_FLAGCOEFFVARLOCART_C',
        })
    public PDL_FLAGCOEFFVARLOCART_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_FLAGQTYORDERED_C',
        })
    public PDL_FLAGQTYORDERED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDL_GROUP_C',
        })
    public PDL_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_ACTIVITY_N',
        })
    public PDL_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_SUBDEPARTMENT_N',
        })
    public PDL_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDL_SALESGROUP_C',
        })
    public PDL_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDL_SALESFAMILY_C',
        })
    public PDL_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDL_SALESSUBFAMILY_C',
        })
    public PDL_SALESSUBFAMILY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_HISTOSALES_N',
        })
    public PDL_HISTOSALES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_SALESCOEFF_D',
        })
    public PDL_SALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_VARIATIONTAX_D',
        })
    public PDL_VARIATIONTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_ABNORMALSALESCOEFF_D',
        })
    public PDL_ABNORMALSALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_STOCKPERIODCOEFF_D',
        })
    public PDL_STOCKPERIODCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDL_GLOBALQTYQUANTIFIED_D',
        })
    public PDL_GLOBALQTYQUANTIFIED_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PDL_PLANOID_C',
        })
    public PDL_PLANOID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_LOCATION_N',
        })
    public PDL_LOCATION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_AUTOPRINT_C',
        })
    public PDL_AUTOPRINT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_AUTOPRINT_EXCEP_C',
        })
    public PDL_AUTOPRINT_EXCEP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_DEPARTMENT_N',
        })
    public PDL_DEPARTMENT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_PUSHPULLFLAG_C',
        })
    public PDL_PUSHPULLFLAG_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_STOCKPUSHPULL_D',
        })
    public PDL_STOCKPUSHPULL_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_STOCKTREATMODE_N',
        })
    public PDL_STOCKTREATMODE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 2,
        name: 'PDL_STOCKMAX_D',
        })
    public PDL_STOCKMAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_MAXORDERED_N',
        })
    public PDL_MAXORDERED_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PDL_PRICEGROUP_C',
        })
    public PDL_PRICEGROUP_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_PRICEGROUPCOEFF_D',
        })
    public PDL_PRICEGROUPCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDL_INITIALPRICEGROUPCOEFF_D',
        })
    public PDL_INITIALPRICEGROUPCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_FLAGPRICEGROUPCOEFF_C',
        })
    public PDL_FLAGPRICEGROUPCOEFF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDL_BRAND_C',
        })
    public PDL_BRAND_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_ORDERID_N',
        })
    public PDL_ORDERID_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_BLOCKCOEFFVARLOCCOM_C',
        })
    public PDL_BLOCKCOEFFVARLOCCOM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PDL_RNDPALASD_C',
        })
    public PDL_RNDPALASD_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDL_CALCQTYORDERED_D',
        })
    public PDL_CALCQTYORDERED_D: number | null;

}
