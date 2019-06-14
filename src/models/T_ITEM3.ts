import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEM3', {schema: 'dbo' } )
@Index('IDX_ITEM3_VARPROMO', ['IT3_IDVARIANTPROMO_C'])
@Index('IDX_PDCSTATE', ['idNumber', 'IT3_PDCSTATE_C', 'IT3_PDCSTATEDATE_DAT'])
@Index('IX_IDCOMMANDE', ['IT3_IDCOMMANDE_C'])
@Index('IX_IDGESTION', ['IT3_IDGESTION_C'])
export class T_ITEM3 {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IT3_IDNUMBER_C',
        })
    public idNumber: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'IT3_IDGESTION_C',
        })
    public IT3_IDGESTION_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'IT3_QTYCOEFF_N',
        })
    public IT3_QTYCOEFF_N: number;

    @Column('int', {
        nullable: true,
        name: 'IT3_TIPALETTE_N',
        })
    public IT3_TIPALETTE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT3_HIPALETTE_N',
        })
    public IT3_HIPALETTE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'IT3_WEIGHT_D',
        })
    public IT3_WEIGHT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT3_MAXORDERQTY_N',
        })
    public IT3_MAXORDERQTY_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'IT3_POURCLOSS_D',
        })
    public IT3_POURCLOSS_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT3_FRESHNESS_N',
        })
    public IT3_FRESHNESS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT3_PDCSTATE_C',
        })
    public IT3_PDCSTATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_PDCSTATEDATE_DAT',
        })
    public IT3_PDCSTATEDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_COEFFVARLOCART_D',
        })
    public IT3_COEFFVARLOCART_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IT3_IDCOMMANDE_C',
        })
    public IT3_IDCOMMANDE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_CANBEORDERED_C',
        })
    public IT3_CANBEORDERED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IT3_IDVARIANTPROMO_C',
        })
    public IT3_IDVARIANTPROMO_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_COEFFRNDPAL_D',
        })
    public IT3_COEFFRNDPAL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_COEFFSEASON_D',
        })
    public IT3_COEFFSEASON_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_COEFFEXCEPT_D',
        })
    public IT3_COEFFEXCEPT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'IT3_LOGISTICGROUP_C',
        })
    public IT3_LOGISTICGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'IT3_DELIVERYCODE2_C',
        })
    public IT3_DELIVERYCODE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'IT3_SUPPLIERID2_C',
        })
    public IT3_SUPPLIERID2_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'IT3_SHIPPINGUNIT2_D',
        })
    public IT3_SHIPPINGUNIT2_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT3_HORFACING_N',
        })
    public IT3_HORFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT3_VERTFACING_N',
        })
    public IT3_VERTFACING_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_FACINGUPDATEMODE_C',
        })
    public IT3_FACINGUPDATEMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_IDCOMMANDEPROV_C',
        })
    public IT3_IDCOMMANDEPROV_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IT3_LINKREFGEST_C',
        })
    public IT3_LINKREFGEST_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IT3_DEPOT2_N',
        })
    public IT3_DEPOT2_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_INTEGRITYFLAG_C',
        })
    public IT3_INTEGRITYFLAG_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_SALESCOEFF_D',
        })
    public IT3_SALESCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_SALESCOEFFMODE_C',
        })
    public IT3_SALESCOEFFMODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_SALESCOEFFDATE_DAT',
        })
    public IT3_SALESCOEFFDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IT3_SALESCOEFFUSER_C',
        })
    public IT3_SALESCOEFFUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_COEFFVARLOCARTDATE_DAT',
        })
    public IT3_COEFFVARLOCARTDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IT3_COEFFVARLOCARTUSER_C',
        })
    public IT3_COEFFVARLOCARTUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_CVLAPERIODSTART_DAT',
        })
    public IT3_CVLAPERIODSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_CVLAPERIODEND_DAT',
        })
    public IT3_CVLAPERIODEND_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_CVLAPERIODDATE_DAT',
        })
    public IT3_CVLAPERIODDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IT3_CVLAPERIODUSER_C',
        })
    public IT3_CVLAPERIODUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_LASTORDER_DAT',
        })
    public IT3_LASTORDER_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT3_LASTORDERTYPE_C',
        })
    public IT3_LASTORDERTYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_LASTDELIVERY_DAT',
        })
    public IT3_LASTDELIVERY_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_PUSHPULLFLAG_C',
        })
    public IT3_PUSHPULLFLAG_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'IT3_STOCKPUSHPULL_D',
        })
    public IT3_STOCKPUSHPULL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_COEFFPALETTE_D',
        })
    public IT3_COEFFPALETTE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'IT3_AVGDAYSALESNORMCONS_D',
        })
    public IT3_AVGDAYSALESNORMCONS_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT3_LOCAL_CANBEORDERED_C',
        })
    public IT3_LOCAL_CANBEORDERED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_LOCAL_CANBEORDERED_DAT',
        })
    public IT3_LOCAL_CANBEORDERED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_IDCOMMANDEUPDATEMODE_C',
        })
    public IT3_IDCOMMANDEUPDATEMODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IT3_IDCOMMANDEUPDATEUSER_C',
        })
    public IT3_IDCOMMANDEUPDATEUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_IDCOMMANDEUPDATE_DAT',
        })
    public IT3_IDCOMMANDEUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'IT3_PRICEGROUP_C',
        })
    public IT3_PRICEGROUP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_CDRELEASE_DAT',
        })
    public IT3_CDRELEASE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'IT3_PRICEGROUPPLU_C',
        })
    public IT3_PRICEGROUPPLU_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 2,
        name: 'IT3_STOCKMAX_D',
        })
    public IT3_STOCKMAX_D: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'IT3_NUMSALESDAYS_N',
        })
    public IT3_NUMSALESDAYS_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_FUTUREMINDEPTHFACING_D',
        })
    public IT3_FUTUREMINDEPTHFACING_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_FUTUREMINDEPTHFACING_DAT',
        })
    public IT3_FUTUREMINDEPTHFACING_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_MINDEPTHFACING_D',
        })
    public IT3_MINDEPTHFACING_D: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'IT3_NUMNORMHISTOWEEKS_N',
        })
    public IT3_NUMNORMHISTOWEEKS_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'IT3_FUTURENUMSALESDAYS_N',
        })
    public IT3_FUTURENUMSALESDAYS_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_FUTURENUMSALESDAYS_DAT',
        })
    public IT3_FUTURENUMSALESDAYS_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_RECALCFACING_C',
        })
    public IT3_RECALCFACING_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_PDCACTIVATION_DAT',
        })
    public IT3_PDCACTIVATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'IT3_INTEGRITYASSORTCHANGE_C',
        })
    public IT3_INTEGRITYASSORTCHANGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_NUMSALESDAYS_EXCEP_C',
        })
    public IT3_NUMSALESDAYS_EXCEP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_MINDEPTHFACING_EXCEP_C',
        })
    public IT3_MINDEPTHFACING_EXCEP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT3_SALESFAMILY_CHANGE_C',
        })
    public IT3_SALESFAMILY_CHANGE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT3_FUTCOEFFVARLOCART_D',
        })
    public IT3_FUTCOEFFVARLOCART_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_FUTCVLAPERIODSTART_DAT',
        })
    public IT3_FUTCVLAPERIODSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_FUTCVLAPERIODEND_DAT',
        })
    public IT3_FUTCVLAPERIODEND_DAT: Date | null;

    @Column('smallint', {
        nullable: true,
        name: 'IT3_SCALEITEMGROUP_N',
        })
    public IT3_SCALEITEMGROUP_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_DLCDATE_DAT',
        })
    public IT3_DLCDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'IT3_DLCUSER_C',
        })
    public IT3_DLCUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT3_DLCUPDATE_DAT',
        })
    public IT3_DLCUPDATE_DAT: Date | null;

}
