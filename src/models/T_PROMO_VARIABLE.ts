import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMO_VARIABLE', {schema: 'dbo' } )
export class T_PROMO_VARIABLE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRV_PROMOTYPE_N',
        })
    public PRV_PROMOTYPE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRV_SEQUENCE_N',
        })
    public PRV_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PRV_TYPECENTRAL_C',
        })
    public PRV_TYPECENTRAL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PRV_TYPEIBM_C',
        })
    public PRV_TYPEIBM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PRV_SUBTYPEIBM_C',
        })
    public PRV_SUBTYPEIBM_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_TYPEABACUS_N',
        })
    public PRV_TYPEABACUS_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_TYPEREWARD_N',
        })
    public PRV_TYPEREWARD_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_ONETIMECOUPON_N',
        })
    public PRV_ONETIMECOUPON_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_REWARDDISTRIB_N',
        })
    public PRV_REWARDDISTRIB_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_CONFLICTLEVEL_N',
        })
    public PRV_CONFLICTLEVEL_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_PROHIBITDISC_N',
        })
    public PRV_PROHIBITDISC_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_PRIORITY_N',
        })
    public PRV_PRIORITY_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_CHOICEFREEITEM_N',
        })
    public PRV_CHOICEFREEITEM_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_DELAYPROMO_N',
        })
    public PRV_DELAYPROMO_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_TARGETMSG_N',
        })
    public PRV_TARGETMSG_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_PROMODEALTYPE_N',
        })
    public PRV_PROMODEALTYPE_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_CREDITCALC_N',
        })
    public PRV_CREDITCALC_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_REWARDMBRACC_N',
        })
    public PRV_REWARDMBRACC_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_SEGMACTIVE_N',
        })
    public PRV_SEGMACTIVE_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_OFFLINETYPE_N',
        })
    public PRV_OFFLINETYPE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PRV_REWARDLIMIT_N',
        })
    public PRV_REWARDLIMIT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PRV_REWARDVALUE_C',
        })
    public PRV_REWARDVALUE_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_SELECTUNIT_N',
        })
    public PRV_SELECTUNIT_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_GROUPTYPE_N',
        })
    public PRV_GROUPTYPE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PRV_TRESHOLD_C',
        })
    public PRV_TRESHOLD_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PRV_GROUPMBR_N',
        })
    public PRV_GROUPMBR_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_DETAILTYPE_N',
        })
    public PRV_DETAILTYPE_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_LINKMODE_N',
        })
    public PRV_LINKMODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PRV_ITSDATATYPE_C',
        })
    public PRV_ITSDATATYPE_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_REWARDWAY_N',
        })
    public PRV_REWARDWAY_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_VOUCHERBARCODEID_N',
        })
    public PRV_VOUCHERBARCODEID_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_VOUCHERTEMPLATEID_N',
        })
    public PRV_VOUCHERTEMPLATEID_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_CONFLICTLEVEL2_N',
        })
    public PRV_CONFLICTLEVEL2_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PRV_APPLICMODE_N',
        })
    public PRV_APPLICMODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PRV_TRESHOLD2_C',
        })
    public PRV_TRESHOLD2_C: string | null;

}
