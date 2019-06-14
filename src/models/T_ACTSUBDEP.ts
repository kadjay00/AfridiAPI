import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTSUBDEP', {schema: 'dbo' } )
@Index('IX_ACTSUBDEP_SUBDEPARTMENT', ['ASD_SUBDEPARTMENT_N'], {unique: true})
export class T_ACTSUBDEP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'ASD_GROUP_C',
        })
    public ASD_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ASD_ACTIVITY_N',
        })
    public ASD_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ASD_SUBDEPARTMENT_N',
        })
    public ASD_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        name: 'ASD_DEPARTMENT_N',
        })
    public ASD_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ASD_ACCOUNTID_C',
        })
    public ASD_ACCOUNTID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_MANAGER_N',
        })
    public ASD_MANAGER_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ASD_MAXPV_D',
        })
    public ASD_MAXPV_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_STATUS1_C',
        })
    public ASD_STATUS1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_STATUS2_C',
        })
    public ASD_STATUS2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_STATUS3_C',
        })
    public ASD_STATUS3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_STATUS4_C',
        })
    public ASD_STATUS4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_TAXCODE_C',
        })
    public ASD_TAXCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'ASD_AVGTAX_D',
        })
    public ASD_AVGTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_AVGPROFIT_D',
        })
    public ASD_AVGPROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_DEFPROFIT_D',
        })
    public ASD_DEFPROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ASD_SUSPQUANT_D',
        })
    public ASD_SUSPQUANT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ASD_SUSPVALUE_D',
        })
    public ASD_SUSPVALUE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ASD_USERID_C',
        })
    public ASD_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LABELPRINT_C',
        })
    public ASD_LABELPRINT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_GOALPERC_D',
        })
    public ASD_GOALPERC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'ASD_GOALVALUE_D',
        })
    public ASD_GOALVALUE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_FLAGDELETE_C',
        })
    public ASD_FLAGDELETE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ASD_PRICECURRENCY_C',
        })
    public ASD_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_FLAGSDEP_C',
        })
    public ASD_FLAGSDEP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PDCAUTOEDIT_C',
        })
    public ASD_PDCAUTOEDIT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_CREATIONLOCALE_C',
        })
    public ASD_CREATIONLOCALE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_AUTOACTIVATION_C',
        })
    public ASD_AUTOACTIVATION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_AUTOEDIT_PDCEXCEP_C',
        })
    public ASD_AUTOEDIT_PDCEXCEP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_AUTOEDIT_PDCINT_C',
        })
    public ASD_AUTOEDIT_PDCINT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_PRCTDIPROV_D',
        })
    public ASD_PRCTDIPROV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'ASD_SALESDAYCOUNT_N',
        })
    public ASD_SALESDAYCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_BENCHMARK_C',
        })
    public ASD_BENCHMARK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'ASD_CATGROUP_C',
        })
    public ASD_CATGROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_DEFHFACING_N',
        })
    public ASD_DEFHFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_DEFVFACING_N',
        })
    public ASD_DEFVFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_DEFPFACING_N',
        })
    public ASD_DEFPFACING_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PROSPECT_C',
        })
    public ASD_PROSPECT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_LOSSPERC_D',
        })
    public ASD_LOSSPERC_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PRMP_C',
        })
    public ASD_PRMP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTEXPORT_C',
        })
    public ASD_PFTEXPORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTCORRPREV_C',
        })
    public ASD_PFTCORRPREV_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTCORRPERTE_C',
        })
    public ASD_PFTCORRPERTE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTSTOCK_C',
        })
    public ASD_PFTSTOCK_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_PROSPECTMINSUNDAYPERC_D',
        })
    public ASD_PROSPECTMINSUNDAYPERC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_LOSSPERCLIMITE_D',
        })
    public ASD_LOSSPERCLIMITE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTNEWITEM_C',
        })
    public ASD_PFTNEWITEM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_CADTYPECALC_C',
        })
    public ASD_CADTYPECALC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_CATREATMODE_C',
        })
    public ASD_CATREATMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_VALIDATEDCO_C',
        })
    public ASD_VALIDATEDCO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PDCINFLUENCEDBYCO_C',
        })
    public ASD_PDCINFLUENCEDBYCO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_RECOUNTEXTRACT_C',
        })
    public ASD_RECOUNTEXTRACT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_BLOCAGE_PDT_PDC_C',
        })
    public ASD_BLOCAGE_PDT_PDC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_GUELTAGE_C',
        })
    public ASD_GUELTAGE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ASD_MAX_GUELTAGE_D',
        })
    public ASD_MAX_GUELTAGE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_FUEL_C',
        })
    public ASD_FUEL_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_PRICEAUGM_N',
        })
    public ASD_PRICEAUGM_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_PRICEDIM_N',
        })
    public ASD_PRICEDIM_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_RFID_C',
        })
    public ASD_RFID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PROMOBALANCE_C',
        })
    public ASD_PROMOBALANCE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_FOODSTAMP_C',
        })
    public ASD_FOODSTAMP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_NONREFUND_C',
        })
    public ASD_NONREFUND_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_POSMSG_N',
        })
    public ASD_POSMSG_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_ONLINETYPE_C',
        })
    public ASD_ONLINETYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_SPOTTER5PCT_C',
        })
    public ASD_SPOTTER5PCT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ASD_MAXSALECAT_D',
        })
    public ASD_MAXSALECAT_D: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_MGRREQSALE_N',
        })
    public ASD_MGRREQSALE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_MGRREQPO_N',
        })
    public ASD_MGRREQPO_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_EXCESSPOFLAG_N',
        })
    public ASD_EXCESSPOFLAG_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'ASD_EXCESSPOVALUE_N',
        })
    public ASD_EXCESSPOVALUE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_EXCESSPOCHECK_N',
        })
    public ASD_EXCESSPOCHECK_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_MARKDOWNPOFLAG_N',
        })
    public ASD_MARKDOWNPOFLAG_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'ASD_MARKDOWNPOVALUE_N',
        })
    public ASD_MARKDOWNPOVALUE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_MARKDOWNPOCHECK_N',
        })
    public ASD_MARKDOWNPOCHECK_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_SPECIALSALE_N',
        })
    public ASD_SPECIALSALE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_NEGATIVESALE_N',
        })
    public ASD_NEGATIVESALE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_DISCOUNTALLOWED_N',
        })
    public ASD_DISCOUNTALLOWED_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'ASD_REFUNDMESSAGE_N',
        })
    public ASD_REFUNDMESSAGE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_PROHIBITDEPSALE_N',
        })
    public ASD_PROHIBITDEPSALE_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_PROHIBITQTY_N',
        })
    public ASD_PROHIBITQTY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 21,
        name: 'ASD_ONLINECARDRANGE_C',
        })
    public ASD_ONLINECARDRANGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_ORDERDAYS_C',
        })
    public ASD_ORDERDAYS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_REPROCESSING_C',
        })
    public ASD_REPROCESSING_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_FIXEDWEIGHT_C',
        })
    public ASD_FIXEDWEIGHT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_UPLOADBALTICKET_C',
        })
    public ASD_UPLOADBALTICKET_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PRICEAUGM_C',
        })
    public ASD_PRICEAUGM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PRICEDIM_C',
        })
    public ASD_PRICEDIM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_DMALLOWEDASSORT_C',
        })
    public ASD_DMALLOWEDASSORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_DMALLOWEDPLANO_C',
        })
    public ASD_DMALLOWEDPLANO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_AMALLOWEDNOTASSORT_C',
        })
    public ASD_AMALLOWEDNOTASSORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_AMALLOWEDNOTPLANO_C',
        })
    public ASD_AMALLOWEDNOTPLANO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LAALLOWEDNOTPLANO_C',
        })
    public ASD_LAALLOWEDNOTPLANO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LAALLOWEDNOTASSORT_C',
        })
    public ASD_LAALLOWEDNOTASSORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LDALLOWEDASSORT_C',
        })
    public ASD_LDALLOWEDASSORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LDALLOWEDPLANO_C',
        })
    public ASD_LDALLOWEDPLANO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_SALESCAT_C',
        })
    public ASD_SALESCAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_FASTSALES_C',
        })
    public ASD_FASTSALES_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LGBRECEPTIONS_C',
        })
    public ASD_LGBRECEPTIONS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_LGBXINCENTRALLOSS_C',
        })
    public ASD_LGBXINCENTRALLOSS_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_SUBDEPCOMPTA_N',
        })
    public ASD_SUBDEPCOMPTA_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_VIDANGE_C',
        })
    public ASD_VIDANGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_ITEMGROUP_C',
        })
    public ASD_ITEMGROUP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTSTOCKGLOB_C',
        })
    public ASD_PFTSTOCKGLOB_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_EXPORTRECALAGERF_C',
        })
    public ASD_EXPORTRECALAGERF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_ECOMSUPPR_C',
        })
    public ASD_ECOMSUPPR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_ECOMCHARGE_C',
        })
    public ASD_ECOMCHARGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_EMPTYUNIT_C',
        })
    public ASD_EMPTYUNIT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_EXPORTDIFFSMSMMI_D',
        })
    public ASD_EXPORTDIFFSMSMMI_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_EXPORTSMSMMI_C',
        })
    public ASD_EXPORTSMSMMI_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_FSMAXLABELS_N',
        })
    public ASD_FSMAXLABELS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_FSMAXLABELSVW_C',
        })
    public ASD_FSMAXLABELSVW_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_NONDETENTION_C',
        })
    public ASD_NONDETENTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_MPLLIST_C',
        })
    public ASD_MPLLIST_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_PFTGRSUPPLIER_C',
        })
    public ASD_PFTGRSUPPLIER_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_ESLMAXRFLABELS_N',
        })
    public ASD_ESLMAXRFLABELS_N: number | null;

    @Column('char', {
        nullable: false,
        name: 'ASD_SPOTTERCATORIGINE_C',
        })
    public ASD_SPOTTERCATORIGINE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_ALLOWPLUCREATION_C',
        })
    public ASD_ALLOWPLUCREATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_NORMPOEXCL_C',
        })
    public ASD_NORMPOEXCL_C: string | null;

    @Column('char', {
        nullable: true,
        length: 10,
        name: 'ASD_LITIGEJUSTIFICATION_C',
        })
    public ASD_LITIGEJUSTIFICATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_ECOMTICKETSINGULAR_C',
        })
    public ASD_ECOMTICKETSINGULAR_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ASD_PRECODEMMAXLABELS_N',
        })
    public ASD_PRECODEMMAXLABELS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_RNDPALPDC_C',
        })
    public ASD_RNDPALPDC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_ECOCHEQUEUSROVERRIDE_C',
        })
    public ASD_ECOCHEQUEUSROVERRIDE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ASD_ECOCHEQUEPLUPRIORITY_C',
        })
    public ASD_ECOCHEQUEPLUPRIORITY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ASD_RECALGIBREFBARCODE_C',
        })
    public ASD_RECALGIBREFBARCODE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ASD_WITHBEEF_N',
        })
    public ASD_WITHBEEF_N: number | null;

}
