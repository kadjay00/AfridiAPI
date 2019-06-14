import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER_DEF', {schema: 'dbo' } )
export class T_ORDER_DEF {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'ORD_STOREID_C',
        })
    public ORD_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORD_YEAR_N',
        })
    public ORD_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORD_ORDERID_N',
        })
    public ORD_ORDERID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_ORDER_DAT',
        })
    public ORD_ORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_EXPDELIVERY_DAT',
        })
    public ORD_EXPDELIVERY_DAT: Date | null;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'ORD_ORDERTYPE_C',
        })
    public ORD_ORDERTYPE_C: string;

    @Column('char', {
        nullable: true,
        name: 'ORD_STATUS_C',
        })
    public ORD_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_STATUSDATE_DAT',
        })
    public ORD_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ORD_CURRENCY_C',
        })
    public ORD_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'ORD_TOTALSALE_D',
        })
    public ORD_TOTALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ORD_TOTALCOST_D',
        })
    public ORD_TOTALCOST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'ORD_TOTALSALEPVEXTAX_D',
        })
    public ORD_TOTALSALEPVEXTAX_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_TOTALLINES_ORIG_N',
        })
    public ORD_TOTALLINES_ORIG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_TOTALLINES_N',
        })
    public ORD_TOTALLINES_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'ORD_SUPPLIERID_C',
        })
    public ORD_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'ORD_COMMENT_C',
        })
    public ORD_COMMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_AUTOPRINT_C',
        })
    public ORD_AUTOPRINT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_PRINTED_C',
        })
    public ORD_PRINTED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_REPRISE_N',
        })
    public ORD_REPRISE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'ORD_PLANNINGID_N',
        })
    public ORD_PLANNINGID_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ORD_TOTALPROFIT_D',
        })
    public ORD_TOTALPROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORD_TOTALCOLLIS_ORIG_D',
        })
    public ORD_TOTALCOLLIS_ORIG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORD_TOTALCOLLIS_D',
        })
    public ORD_TOTALCOLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORD_TOTALCOLLISDELIV_D',
        })
    public ORD_TOTALCOLLISDELIV_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORD_USERID_CONF_C',
        })
    public ORD_USERID_CONF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'ORD_ORDERID_CENTRAL_C',
        })
    public ORD_ORDERID_CENTRAL_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_CONF_DAT',
        })
    public ORD_CONF_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_VALOR_DAT',
        })
    public ORD_VALOR_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_DEPARTMENT_N',
        })
    public ORD_DEPARTMENT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ORD_RENDEMENT_D',
        })
    public ORD_RENDEMENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_OLDSTATUS_C',
        })
    public ORD_OLDSTATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'ORD_GRPLOGISTIC_C',
        })
    public ORD_GRPLOGISTIC_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORD_TOTALCOLLISNONDELIV_D',
        })
    public ORD_TOTALCOLLISNONDELIV_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORD_USERORDERER_C',
        })
    public ORD_USERORDERER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORD_USERVALIDATE_C',
        })
    public ORD_USERVALIDATE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_PDTMODIFIED_C',
        })
    public ORD_PDTMODIFIED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ORD_ERRORSOURCE_C',
        })
    public ORD_ERRORSOURCE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ORD_TOTALCOSTPLAFOND_D',
        })
    public ORD_TOTALCOSTPLAFOND_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ORD_TOTALPROFITPLAFOND_D',
        })
    public ORD_TOTALPROFITPLAFOND_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ORD_RENDEMENTPLAFOND_D',
        })
    public ORD_RENDEMENTPLAFOND_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_PUSHPULLCHECKED_C',
        })
    public ORD_PUSHPULLCHECKED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'ORD_ORDERSOURCE_C',
        })
    public ORD_ORDERSOURCE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_REALDELIVERY_DAT',
        })
    public ORD_REALDELIVERY_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_BONPRINTED_C',
        })
    public ORD_BONPRINTED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_BONPRINTEDDATE_DAT',
        })
    public ORD_BONPRINTEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORD_BONPRINTEDUSER_C',
        })
    public ORD_BONPRINTEDUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ORD_SUPPLIERSAP_C',
        })
    public ORD_SUPPLIERSAP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORD_ACTIVITY_N',
        })
    public ORD_ACTIVITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_INDICATOR_C',
        })
    public ORD_INDICATOR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ORD_CADENCETYPE_C',
        })
    public ORD_CADENCETYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORD_LOCSUP_C',
        })
    public ORD_LOCSUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ORD_USERIDCLOSE_C',
        })
    public ORD_USERIDCLOSE_C: string | null;

}
