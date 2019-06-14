import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PFT_DETAIL', {schema: 'dbo' } )
@Index('IDX_PFT_DETAIL_IDNUMBER', ['PFD_IDNUMBER_C', 'PFD_WEEK_N', 'PFD_SUPPR_C'])
export class T_PFT_DETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFD_YEAR_N',
        })
    public PFD_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFD_WEEK_N',
        })
    public PFD_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PFD_IDNUMBER_C',
        })
    public PFD_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'PFD_ACTIVITY_N',
        })
    public PFD_ACTIVITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PFD_LOGISTICGROUP_C',
        })
    public PFD_LOGISTICGROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PFD_SUBDEPARTMENT_N',
        })
    public PFD_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PFD_SALESFAMILY_C',
        })
    public PFD_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PFD_SALESSUBFAMILY_C',
        })
    public PFD_SALESSUBFAMILY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PFD_DEPARTMENT_N',
        })
    public PFD_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PFD_GIBREF_C',
        })
    public PFD_GIBREF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_REASON_C',
        })
    public PFD_REASON_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_NEWITEM_C',
        })
    public PFD_NEWITEM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PFD_REG_IDNUMBER_C',
        })
    public PFD_REG_IDNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_PRELABELED_C',
        })
    public PFD_PRELABELED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_PVREG_D',
        })
    public PFD_PVREG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PFD_PFREG_D',
        })
    public PFD_PFREG_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_PFREGTYPE_C',
        })
    public PFD_PFREGTYPE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 5,
        name: 'PFD_PROFITREG_D',
        })
    public PFD_PROFITREG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_PVPROMO_D',
        })
    public PFD_PVPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PFD_PFPROMO_D',
        })
    public PFD_PFPROMO_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_PFPROMOTYPE_C',
        })
    public PFD_PFPROMOTYPE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 5,
        name: 'PFD_PROFITPROMO_D',
        })
    public PFD_PROFITPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_STOCKDISPO_D',
        })
    public PFD_STOCKDISPO_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFD_CREATION_DAT',
        })
    public PFD_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFD_UPDATE_DAT',
        })
    public PFD_UPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PFD_SORT1_C',
        })
    public PFD_SORT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PFD_SORT2_C',
        })
    public PFD_SORT2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PFD_SORT3_C',
        })
    public PFD_SORT3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PFD_SORT4_C',
        })
    public PFD_SORT4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PFD_SORT5_C',
        })
    public PFD_SORT5_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PFD_SORT6_C',
        })
    public PFD_SORT6_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PFD_SORT7_C',
        })
    public PFD_SORT7_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_QUANTIFTYPE_C',
        })
    public PFD_QUANTIFTYPE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_COEFFCORR_D',
        })
    public PFD_COEFFCORR_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_THSELL_D',
        })
    public PFD_THSELL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_REG_ORDERED_D',
        })
    public PFD_REG_ORDERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_PROMO_ORDERED_D',
        })
    public PFD_PROMO_ORDERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_SOLD_D',
        })
    public PFD_SOLD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_SOLD_YESTERDAY_D',
        })
    public PFD_SOLD_YESTERDAY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_CASOLD_D',
        })
    public PFD_CASOLD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_PROFITSOLD_D',
        })
    public PFD_PROFITSOLD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_PROFITPERCSOLD_D',
        })
    public PFD_PROFITPERCSOLD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PFD_PFSOLD_D',
        })
    public PFD_PFSOLD_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 11,
        scale: 0,
        name: 'PFD_AVGWEEK4_N',
        })
    public PFD_AVGWEEK4_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 11,
        scale: 0,
        name: 'PFD_AVGWEEK1_N',
        })
    public PFD_AVGWEEK1_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_THSELL_1_D',
        })
    public PFD_THSELL_1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_ENCOURS_D',
        })
    public PFD_ENCOURS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PFD_COEFFCDE_D',
        })
    public PFD_COEFFCDE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_PDCACTIVE_C',
        })
    public PFD_PDCACTIVE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_SNSTOCK_D',
        })
    public PFD_SNSTOCK_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'PFD_HEADER_N',
        })
    public PFD_HEADER_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_SUPPR_C',
        })
    public PFD_SUPPR_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_SALESTOCOVER_D',
        })
    public PFD_SALESTOCOVER_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_SECURITYSTOCK_D',
        })
    public PFD_SECURITYSTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_ENCOURS_AFF_D',
        })
    public PFD_ENCOURS_AFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_AVGWEEK4_D',
        })
    public PFD_AVGWEEK4_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_AVGWEEK1_D',
        })
    public PFD_AVGWEEK1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_STOCKDISPOGLOB_D',
        })
    public PFD_STOCKDISPOGLOB_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_BREAK_DAY_1_D',
        })
    public PFD_BREAK_DAY_1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 1,
        name: 'PFD_STOCK_ROTATION_D',
        })
    public PFD_STOCK_ROTATION_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_STOCKGLOB_C',
        })
    public PFD_STOCKGLOB_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_CADTYPECALC_C',
        })
    public PFD_CADTYPECALC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PFD_TABLETMNGD_C',
        })
    public PFD_TABLETMNGD_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PFD_SNSTOCKPCE_D',
        })
    public PFD_SNSTOCKPCE_D: number | null;

}
