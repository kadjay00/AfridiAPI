import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_CALENDAR', {schema: 'dbo' } )
export class T_PDC_CALENDAR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'CPC_CALENDARID_N',
        })
    public CPC_CALENDARID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'CPC_LOGISTICGROUP_C',
        })
    public CPC_LOGISTICGROUP_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CPC_LOGISTICGROUP_DESCNL_C',
        })
    public CPC_LOGISTICGROUP_DESCNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CPC_LOGISTICGROUP_DESCFR_C',
        })
    public CPC_LOGISTICGROUP_DESCFR_C: string | null;

    @Column('int', {
        nullable: false,
        name: 'CPC_DEPOT_N',
        })
    public CPC_DEPOT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'CPC_CADENCETYPE_C',
        })
    public CPC_CADENCETYPE_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'CPC_ORDER_DAT',
        })
    public CPC_ORDER_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'CPC_PICKING_DAT',
        })
    public CPC_PICKING_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'CPC_LOADING_DAT',
        })
    public CPC_LOADING_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'CPC_DELIVERYSTART_DAT',
        })
    public CPC_DELIVERYSTART_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'CPC_DELIVERYEND_DAT',
        })
    public CPC_DELIVERYEND_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'CPC_NEXTORDER_DAT',
        })
    public CPC_NEXTORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CPC_NEXTDELIVERYSTART_DAT',
        })
    public CPC_NEXTDELIVERYSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CPC_NEXTDELIVERYEND_DAT',
        })
    public CPC_NEXTDELIVERYEND_DAT: Date | null;

    @Column('int', {
        nullable: false,
        name: 'CPC_HEADER_N',
        })
    public CPC_HEADER_N: number;

    @Column('char', {
        nullable: true,
        name: 'CPC_SUPPRESSED_C',
        })
    public CPC_SUPPRESSED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'CPC_SUPPDATE_DAT',
        })
    public CPC_SUPPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CPC_CREATED_DAT',
        })
    public CPC_CREATED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CPC_SUPPLIERID_C',
        })
    public CPC_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CPC_QUANTIFTYPE_C',
        })
    public CPC_QUANTIFTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'CPC_SUPPLIERSAP_C',
        })
    public CPC_SUPPLIERSAP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CPC_ORIGIN_C',
        })
    public CPC_ORIGIN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CPC_PERIODICITY_C',
        })
    public CPC_PERIODICITY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CPC_MINCOLIS_D',
        })
    public CPC_MINCOLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CPC_MAXCOLIS_D',
        })
    public CPC_MAXCOLIS_D: number | null;

}
