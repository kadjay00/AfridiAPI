import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PERIODEDEPARTMENT', {schema: 'dbo' } )
export class T_PERIODEDEPARTMENT {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PDP_PERIODEFOODNONFOOD_C',
        })
    public PDP_PERIODEFOODNONFOOD_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PDP_PERIODENBR_C',
        })
    public PDP_PERIODENBR_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'PDP_ENDDATE_DAT',
        })
    public PDP_ENDDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PDP_DEPARTMENT_N',
        })
    public PDP_DEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PDP_SUBDEPARTMENT_N',
        })
    public PDP_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PDP_PURCHGROUP_C',
        })
    public PDP_PURCHGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PDP_PURCHFAMILY_C',
        })
    public PDP_PURCHFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PDP_PURCHSUBFAMILY',
        })
    public PDP_PURCHSUBFAMILY: string;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PDP_PRICECURRENCY_C',
        })
    public PDP_PRICECURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'PDP_PROPOSEDSALESPRICEPROMO_D',
        })
    public PDP_PROPOSEDSALESPRICEPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_PROPOSEDCOSTPRICE_D',
        })
    public PDP_PROPOSEDCOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_PROPOSEDPROFIT_D',
        })
    public PDP_PROPOSEDPROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDP_PROPOSEDPROFITPERCENT_D',
        })
    public PDP_PROPOSEDPROFITPERCENT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'PDP_CORRECTEDSALESPRICEPROMO_D',
        })
    public PDP_CORRECTEDSALESPRICEPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_CORRECTEDCOSTPRICE_D',
        })
    public PDP_CORRECTEDCOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_CORRECTEDPROFIT_D',
        })
    public PDP_CORRECTEDPROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDP_CORRECTEDPROFITPERCENT_D',
        })
    public PDP_CORRECTEDPROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDP_DEPARTMENTSTATUS_C',
        })
    public PDP_DEPARTMENTSTATUS_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'PDP_PROPSALESPRICEPROMOP_D',
        })
    public PDP_PROPSALESPRICEPROMOP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_PROPCOSTPRICEP_D',
        })
    public PDP_PROPCOSTPRICEP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_PROPPROFITP_D',
        })
    public PDP_PROPPROFITP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDP_PROPPROFITPERCENTP_D',
        })
    public PDP_PROPPROFITPERCENTP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'PDP_CORRSALESPRICEPROMOP_D',
        })
    public PDP_CORRSALESPRICEPROMOP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_CORRCOSTPRICEP_D',
        })
    public PDP_CORRCOSTPRICEP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_CORRPROFITP_D',
        })
    public PDP_CORRPROFITP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDP_CORRPROFITPERCENTP_D',
        })
    public PDP_CORRPROFITPERCENTP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'PDP_ANNSALESPRICEPROMO_D',
        })
    public PDP_ANNSALESPRICEPROMO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_ANNCOSTPRICE_D',
        })
    public PDP_ANNCOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_ANNPROFIT_D',
        })
    public PDP_ANNPROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDP_ANNPROFITPERCENT_D',
        })
    public PDP_ANNPROFITPERCENT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'PDP_ANNSALESPRICEPROMOP_D',
        })
    public PDP_ANNSALESPRICEPROMOP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_ANNCOSTPRICEP_D',
        })
    public PDP_ANNCOSTPRICEP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'PDP_ANNPROFITP_D',
        })
    public PDP_ANNPROFITP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDP_ANNPROFITPERCENTP_D',
        })
    public PDP_ANNPROFITPERCENTP_D: number | null;

}
