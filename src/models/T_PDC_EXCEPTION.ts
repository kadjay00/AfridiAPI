import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_EXCEPTION', {schema: 'dbo' } )
export class T_PDC_EXCEPTION {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PDE_PDCNUMBER_N',
        })
    public PDE_PDCNUMBER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PDE_IDNUMBER_C',
        })
    public PDE_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PDE_EXCEPTION_STATUS',
        })
    public PDE_EXCEPTION_STATUS: string;

    @Column('int', {
        nullable: true,
        name: 'PDE_ACTIVITY_N',
        })
    public PDE_ACTIVITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_CONFIRMATION_C',
        })
    public PDE_CONFIRMATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDE_SALESFAMILY_C',
        })
    public PDE_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'PDE_SUPPLIERID_C',
        })
    public PDE_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_DELIVERYCODE_C',
        })
    public PDE_DELIVERYCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDE_CALCUL_DAT',
        })
    public PDE_CALCUL_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDE_DELIVERY_DAT',
        })
    public PDE_DELIVERY_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDE_NEXTORDER_DAT',
        })
    public PDE_NEXTORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDE_NEXTDELIVERY_DAT',
        })
    public PDE_NEXTDELIVERY_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PDE_CALLHOUR_C',
        })
    public PDE_CALLHOUR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDE_ORDERFREQUENCY_C',
        })
    public PDE_ORDERFREQUENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDE_TOTALAMOUNT_D',
        })
    public PDE_TOTALAMOUNT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_TOTALCOLIS_D',
        })
    public PDE_TOTALCOLIS_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDE_GIBREF_C',
        })
    public PDE_GIBREF_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PDE_EANCODE_N',
        })
    public PDE_EANCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PDE_ITEMDESCRIPFRA_C',
        })
    public PDE_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PDE_ITEMDESCRIPNED_C',
        })
    public PDE_ITEMDESCRIPNED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDE_REALSALE_D',
        })
    public PDE_REALSALE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_FUTUREPROMO_C',
        })
    public PDE_FUTUREPROMO_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDE_AVERAGESALE_D',
        })
    public PDE_AVERAGESALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDE_COEFFSEASON_D',
        })
    public PDE_COEFFSEASON_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDE_COEFFEXCEPT_D',
        })
    public PDE_COEFFEXCEPT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDE_COEFFVARLOCART_D',
        })
    public PDE_COEFFVARLOCART_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDE_COEFFVARLOCCOM_D',
        })
    public PDE_COEFFVARLOCCOM_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDE_USEDCOEFF_D',
        })
    public PDE_USEDCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDE_CONSIDEREDSALE_D',
        })
    public PDE_CONSIDEREDSALE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDE_PROMOSTART_DAT',
        })
    public PDE_PROMOSTART_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_SALESTOCK_D',
        })
    public PDE_SALESTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_STOCKVARSALE_D',
        })
    public PDE_STOCKVARSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_STOCKAVAILABLE_D',
        })
    public PDE_STOCKAVAILABLE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDE_STOCKPERIOD_D',
        })
    public PDE_STOCKPERIOD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_QTYOPENORDERS_D',
        })
    public PDE_QTYOPENORDERS_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_ZEROSALES_C',
        })
    public PDE_ZEROSALES_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_ABNORMALSALES_C',
        })
    public PDE_ABNORMALSALES_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_NEWARTICLE_C',
        })
    public PDE_NEWARTICLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_DELETEDARTICLE_C',
        })
    public PDE_DELETEDARTICLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_OUTOFSTOCK_C',
        })
    public PDE_OUTOFSTOCK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_ABNORMALSTOCK_C',
        })
    public PDE_ABNORMALSTOCK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_ABNORMALFACING_C',
        })
    public PDE_ABNORMALFACING_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDE_AVERAGESTOCKPERIODS_D',
        })
    public PDE_AVERAGESTOCKPERIODS_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PDE_VALIDATIONHOUR_C',
        })
    public PDE_VALIDATIONHOUR_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDE_PROMOEND_DAT',
        })
    public PDE_PROMOEND_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_PASTPROMO_C',
        })
    public PDE_PASTPROMO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_AUTOPRINT_EXCEP_C',
        })
    public PDE_AUTOPRINT_EXCEP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_PUSHPULLFLAG_C',
        })
    public PDE_PUSHPULLFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_COSTORE_C',
        })
    public PDE_COSTORE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDE_CODEPOT_C',
        })
    public PDE_CODEPOT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_GLOBALSTOCK_D',
        })
    public PDE_GLOBALSTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDE_STOCKNEE_D',
        })
    public PDE_STOCKNEE_D: number | null;

}
