import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER', {schema: 'dbo' } )
@Index('IX_ORDER_SUPPLIERID', ['ORD_SUPPLIERID_C'])
export class T_ORDER {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'ORD_ORDERID_N',
        })
    public ORD_ORDERID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'ORD_ORDER_DAT',
        })
    public ORD_ORDER_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'ORD_DELIVERY_DAT',
        })
    public ORD_DELIVERY_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'ORD_COMMENT_C',
        })
    public ORD_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'ORD_CURRENCY_C',
        })
    public ORD_CURRENCY_C: string;

    @Column('char', {
        nullable: false,
        name: 'ORD_STATUS_C',
        })
    public ORD_STATUS_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 10,
        scale: 2,
        name: 'ORD_TOTALSALE_D',
        })
    public ORD_TOTALSALE_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 11,
        scale: 3,
        name: 'ORD_TOTALCOST_D',
        })
    public ORD_TOTALCOST_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 11,
        scale: 3,
        name: 'ORD_TOTALPROFIT_D',
        })
    public ORD_TOTALPROFIT_D: number;

    @Column('int', {
        nullable: false,
        name: 'ORD_TOTALLINES_I',
        })
    public ORD_TOTALLINES_I: number;

    @Column('varchar', {
        nullable: false,
        length: 13,
        name: 'ORD_SUPPLIERID_C',
        })
    public ORD_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'ORD_STOREID_C',
        })
    public ORD_STOREID_C: string;

    @Column('int', {
        nullable: true,
        name: 'ORD_REPRISE_N',
        })
    public ORD_REPRISE_N: number | null;

}
