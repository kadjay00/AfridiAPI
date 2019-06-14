import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDT_ORDER', {schema: 'dbo' } )
export class T_PDT_ORDER {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'PDT_PDTORDERID_N',
        })
    public PDT_PDTORDERID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'PDT_STOREID_C',
        })
    public PDT_STOREID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_YEAR_N',
        })
    public PDT_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_ORDERID_N',
        })
    public PDT_ORDERID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_HEADER_N',
        })
    public PDT_HEADER_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDT_ORDER_DAT',
        })
    public PDT_ORDER_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_PDT_NR_N',
        })
    public PDT_PDT_NR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_REPRISE_N',
        })
    public PDT_REPRISE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_TOTALLINES_N',
        })
    public PDT_TOTALLINES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PDT_TOTALCOLLIS_D',
        })
    public PDT_TOTALCOLLIS_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_FLAG_COLIS_C',
        })
    public PDT_FLAG_COLIS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_STATUS_C',
        })
    public PDT_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_FLAGDIRECT_C',
        })
    public PDT_FLAGDIRECT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'PDT_SUPPLIERID_C',
        })
    public PDT_SUPPLIERID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_DEPARTMENT_N',
        })
    public PDT_DEPARTMENT_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDT_STATUS_DAT',
        })
    public PDT_STATUS_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_TOTALOKLINES_N',
        })
    public PDT_TOTALOKLINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDT_ACTIVITY_N',
        })
    public PDT_ACTIVITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_INDICATOR_C',
        })
    public PDT_INDICATOR_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'PDT_PLANNINGID_N',
        })
    public PDT_PLANNINGID_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDT_DELIVERY_DAT',
        })
    public PDT_DELIVERY_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_QTYTYPE_C',
        })
    public PDT_QTYTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_ORIGIN_C',
        })
    public PDT_ORIGIN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PDT_USERID_C',
        })
    public PDT_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PDT_WHERE_C',
        })
    public PDT_WHERE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDT_CHOICE_DAT',
        })
    public PDT_CHOICE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'PDT_ORDERSOURCE_C',
        })
    public PDT_ORDERSOURCE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'PDT_COMMENT_C',
        })
    public PDT_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDT_ORDERTYPEORIG_C',
        })
    public PDT_ORDERTYPEORIG_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PDT_CADENCETYPE_C',
        })
    public PDT_CADENCETYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDT_PROPOSED_DAT',
        })
    public PDT_PROPOSED_DAT: Date | null;

}
