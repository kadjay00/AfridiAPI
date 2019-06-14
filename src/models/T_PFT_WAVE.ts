import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PFT_WAVE', {schema: 'dbo' } )
export class T_PFT_WAVE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFW_YEAR_N',
        })
    public PFW_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFW_WEEK_N',
        })
    public PFW_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PFW_IDNUMBER_C',
        })
    public PFW_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PFW_DELIVERYDATE_DAT',
        })
    public PFW_DELIVERYDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_ORDERDATE_DAT',
        })
    public PFW_ORDERDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_MAYORDERTODAY_C',
        })
    public PFW_MAYORDERTODAY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PFW_REG_SHIPPINGUNIT_D',
        })
    public PFW_REG_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYPROPOSED_D',
        })
    public PFW_REG_QTYPROPOSED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYCALC_D',
        })
    public PFW_REG_QTYCALC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYMODIFIED_D',
        })
    public PFW_REG_QTYMODIFIED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYORDERED_D',
        })
    public PFW_REG_QTYORDERED_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_REG_BLOCKED_C',
        })
    public PFW_REG_BLOCKED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'PFW_PROMOTIONID_C',
        })
    public PFW_PROMOTIONID_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PFW_PROMO_SHIPPINGUNIT_D',
        })
    public PFW_PROMO_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYPROPOSED_D',
        })
    public PFW_PROMO_QTYPROPOSED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYCALC_D',
        })
    public PFW_PROMO_QTYCALC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYMODIFIED_D',
        })
    public PFW_PROMO_QTYMODIFIED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYORDERED_D',
        })
    public PFW_PROMO_QTYORDERED_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_PROMO_BLOCKED_C',
        })
    public PFW_PROMO_BLOCKED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PFW_PROMOTYPE_C',
        })
    public PFW_PROMOTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_QUANTIFTYPE_C',
        })
    public PFW_QUANTIFTYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_CREATION_DAT',
        })
    public PFW_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_UPDATE_DAT',
        })
    public PFW_UPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_SUPPRESSION_DAT',
        })
    public PFW_SUPPRESSION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_TRANSFORMATION_DAT',
        })
    public PFW_TRANSFORMATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_CALCULATIONDATE_DAT',
        })
    public PFW_CALCULATIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PFW_USERID_C',
        })
    public PFW_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_MODIFICATION_DAT',
        })
    public PFW_MODIFICATION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_MODIFALLOWED_C',
        })
    public PFW_MODIFALLOWED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_MANORDERALLOWED_C',
        })
    public PFW_MANORDERALLOWED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_PDTORDERALLOWED_C',
        })
    public PFW_PDTORDERALLOWED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_ORDERPRIORITY_C',
        })
    public PFW_ORDERPRIORITY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_INCLNEXTDELIV_C',
        })
    public PFW_INCLNEXTDELIV_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFW_CALCTYPE_C',
        })
    public PFW_CALCTYPE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYPROPOSED_UNIT_D',
        })
    public PFW_REG_QTYPROPOSED_UNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYPROPOSED_UNIT_D',
        })
    public PFW_PROMO_QTYPROPOSED_UNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PFW_NPP_SHIPPINGUNIT_D',
        })
    public PFW_NPP_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYPROPOSED_NPP_D',
        })
    public PFW_REG_QTYPROPOSED_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYCALC_NPP_D',
        })
    public PFW_REG_QTYCALC_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYMODIFIED_NPP_D',
        })
    public PFW_REG_QTYMODIFIED_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_REG_QTYORDERED_NPP_D',
        })
    public PFW_REG_QTYORDERED_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYPROPOSED_NPP_D',
        })
    public PFW_PROMO_QTYPROPOSED_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYCALC_NPP_D',
        })
    public PFW_PROMO_QTYCALC_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYMODIFIED_NPP_D',
        })
    public PFW_PROMO_QTYMODIFIED_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFW_PROMO_QTYORDERED_NPP_D',
        })
    public PFW_PROMO_QTYORDERED_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'PFW_BCK_SHIPPINGUNIT_D',
        })
    public PFW_BCK_SHIPPINGUNIT_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_DRPREG_DAT',
        })
    public PFW_DRPREG_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFW_DRPPROMO_DAT',
        })
    public PFW_DRPPROMO_DAT: Date | null;

}
