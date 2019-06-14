import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FAMILY', {schema: 'dbo' } )
@Index('IX_FAMILY_SDEP_FAM', ['FAM_SUBDEPARTMENT_N', 'FAM_SALESGROUP_C', 'FAM_SALESFAMILY_C', 'FAM_SALESSUBFAMILY_C'])
export class T_FAMILY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'FAM_GROUP_C',
        })
    public FAM_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FAM_ACTIVITY_N',
        })
    public FAM_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FAM_SUBDEPARTMENT_N',
        })
    public FAM_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'FAM_SALESGROUP_C',
        })
    public FAM_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'FAM_SALESFAMILY_C',
        })
    public FAM_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'FAM_SALESSUBFAMILY_C',
        })
    public FAM_SALESSUBFAMILY_C: string;

    @Column('char', {
        nullable: true,
        name: 'FAM_NORMSTARTED_C',
        })
    public FAM_NORMSTARTED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_PDCACTIVE_DAT',
        })
    public FAM_PDCACTIVE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_PDCINACTIVE_DAT',
        })
    public FAM_PDCINACTIVE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'FAM_HISTOLISSAGE_N',
        })
    public FAM_HISTOLISSAGE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FAM_HISTOSALES_N',
        })
    public FAM_HISTOSALES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_SALESCOEFF_D',
        })
    public FAM_SALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_VARIATIONTAX_D',
        })
    public FAM_VARIATIONTAX_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_CONFIRMATION_C',
        })
    public FAM_CONFIRMATION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_BLOCKCOEFFVARLOCCOM_C',
        })
    public FAM_BLOCKCOEFFVARLOCCOM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_BLOCKCOEFFVARLOCART_C',
        })
    public FAM_BLOCKCOEFFVARLOCART_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_ABNORMALSALESCOEFF_D',
        })
    public FAM_ABNORMALSALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_STOCKPERIODCOEFF_D',
        })
    public FAM_STOCKPERIODCOEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'FAM_AMTOPMHOUR_C',
        })
    public FAM_AMTOPMHOUR_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'FAM_VALIDATIONCALL_N',
        })
    public FAM_VALIDATIONCALL_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_ACTIVATED_C',
        })
    public FAM_ACTIVATED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_INACTIVATED_C',
        })
    public FAM_INACTIVATED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_INTROSUPFLAG_C',
        })
    public FAM_INTROSUPFLAG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_ASSORTMENT_C',
        })
    public FAM_ASSORTMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_ASSORTORIGINE_C',
        })
    public FAM_ASSORTORIGINE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_COEFFVARLOCART_D',
        })
    public FAM_COEFFVARLOCART_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FAM_COEFFVARLOCARTUSER_C',
        })
    public FAM_COEFFVARLOCARTUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_COEFFVARLOCARTDATE_DAT',
        })
    public FAM_COEFFVARLOCARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_CVLAPERIODSTART_DAT',
        })
    public FAM_CVLAPERIODSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_CVLAPERIODEND_DAT',
        })
    public FAM_CVLAPERIODEND_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_CVLAPERIODDATE_DAT',
        })
    public FAM_CVLAPERIODDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FAM_CVLAPERIODUSER_C',
        })
    public FAM_CVLAPERIODUSER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_CHECKITEMFLAG_C',
        })
    public FAM_CHECKITEMFLAG_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'FAM_VALIDATIONCALLPPP_N',
        })
    public FAM_VALIDATIONCALLPPP_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FAM_AVGCOLPAL_N',
        })
    public FAM_AVGCOLPAL_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'FAM_PALETTEBREAK_C',
        })
    public FAM_PALETTEBREAK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_TREATMENTTYPE_C',
        })
    public FAM_TREATMENTTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEFACINGS_C',
        })
    public FAM_UPDATEABLEFACINGS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEPDCSTATE_C',
        })
    public FAM_UPDATEABLEPDCSTATE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLECVLA_C',
        })
    public FAM_UPDATEABLECVLA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEIDCOMMANDE_C',
        })
    public FAM_UPDATEABLEIDCOMMANDE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_PDCROUNDMODE_C',
        })
    public FAM_PDCROUNDMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_FACINGUPDATEMODE_C',
        })
    public FAM_FACINGUPDATEMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_HORFACINGCALCMODE_C',
        })
    public FAM_HORFACINGCALCMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_VERTFACINGCALCMODE_C',
        })
    public FAM_VERTFACINGCALCMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_PROFFACINGCALCMODE_C',
        })
    public FAM_PROFFACINGCALCMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_COFAMNONPDC_C',
        })
    public FAM_COFAMNONPDC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FAM_COFAMNONPDCPERIODICITY_C',
        })
    public FAM_COFAMNONPDCPERIODICITY_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'FAM_NUMSALESDAYS_N',
        })
    public FAM_NUMSALESDAYS_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_NUMSALESDAYSAPPDATE_DAT',
        })
    public FAM_NUMSALESDAYSAPPDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_MINDEPTHFACING_D',
        })
    public FAM_MINDEPTHFACING_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_MINDEPTHFACINGAPPDATE_DAT',
        })
    public FAM_MINDEPTHFACINGAPPDATE_DAT: Date | null;

    @Column('tinyint', {
        nullable: true,
        name: 'FAM_NUMNORMHISTOWEEKS_N',
        })
    public FAM_NUMNORMHISTOWEEKS_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_PDCTYPE_C',
        })
    public FAM_PDCTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEHORFACING_C',
        })
    public FAM_UPDATEABLEHORFACING_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEVERTFACING_C',
        })
    public FAM_UPDATEABLEVERTFACING_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEDEPTHFACING_C',
        })
    public FAM_UPDATEABLEDEPTHFACING_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_SALESCOEFFUPDATEMODE_C',
        })
    public FAM_SALESCOEFFUPDATEMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_PDTLC_C',
        })
    public FAM_PDTLC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_PDTLD_C',
        })
    public FAM_PDTLD_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEPDCLD_C',
        })
    public FAM_UPDATEABLEPDCLD_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_UPDATEABLEPDCLC_C',
        })
    public FAM_UPDATEABLEPDCLC_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'FAM_CURNUMSALESDAYS_N',
        })
    public FAM_CURNUMSALESDAYS_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_CURMINDEPTHFACING_D',
        })
    public FAM_CURMINDEPTHFACING_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_PFTSECURITYCOEFF_D',
        })
    public FAM_PFTSECURITYCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_MAXISLIM_C',
        })
    public FAM_MAXISLIM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_HIDEPRICESLIM_C',
        })
    public FAM_HIDEPRICESLIM_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2NAV0_D',
        })
    public FAM_N2NAV0_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'FAM_N2NAV0GE1KG_D',
        })
    public FAM_N2NAV0GE1KG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'FAM_N2NAV0LT1KG_D',
        })
    public FAM_N2NAV0LT1KG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2NAVX_D',
        })
    public FAM_N2NAVX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2NAVXLIMIT_D',
        })
    public FAM_N2NAVXLIMIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2RARATIO1_D',
        })
    public FAM_N2RARATIO1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2RARATIO1FACTOR_D',
        })
    public FAM_N2RARATIO1FACTOR_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2RARATIO2_D',
        })
    public FAM_N2RARATIO2_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FAM_N2RARATIO2FACTOR_D',
        })
    public FAM_N2RARATIO2FACTOR_D: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'FAM_N2DAYSNOSALESFORNA_N',
        })
    public FAM_N2DAYSNOSALESFORNA_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FAM_FUTCOEFFVARLOCART_D',
        })
    public FAM_FUTCOEFFVARLOCART_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_FUTCVLAPERIODSTART_DAT',
        })
    public FAM_FUTCVLAPERIODSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_FUTCVLAPERIODEND_DAT',
        })
    public FAM_FUTCVLAPERIODEND_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_DLCACTIVE_DAT',
        })
    public FAM_DLCACTIVE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FAM_DLCINACTIVE_DAT',
        })
    public FAM_DLCINACTIVE_DAT: Date | null;

    @Column('tinyint', {
        nullable: true,
        name: 'FAM_DLCCHARTER_N',
        })
    public FAM_DLCCHARTER_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'FAM_DLCDELTA_N',
        })
    public FAM_DLCDELTA_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'FAM_DLCDISCOUNTPCT_D',
        })
    public FAM_DLCDISCOUNTPCT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'FAM_HIDECABSLIM_C',
        })
    public FAM_HIDECABSLIM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FAM_ESLEAN13ScanMe_C',
        })
    public FAM_ESLEAN13ScanMe_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'FAM_ECOMVWLOWERMARGIN_D',
        })
    public FAM_ECOMVWLOWERMARGIN_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'FAM_ECOMVWUPPERMARGIN_D',
        })
    public FAM_ECOMVWUPPERMARGIN_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FAM_PRNDF_C',
        })
    public FAM_PRNDF_C: string | null;

}
