import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('TMP_SPY_LLSTOPWR', {schema: 'dbo' } )
export class TMP_SPY_LLSTOPWR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SPYID',
        })
    public SPYID: number;

    @Column('varchar', {
        nullable: false,
        length: 15,
        name: 'ACTION',
        })
    public ACTION: string;

    @Column('datetime', {
        nullable: false,
        name: 'SPYDATE',
        })
    public SPYDATE: Date;

    @Column('int', {
        nullable: true,
        name: 'RUN',
        })
    public RUN: number | null;

    @Column('int', {
        nullable: true,
        name: 'AANTAL',
        })
    public AANTAL: number | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'TABEL',
        })
    public TABEL: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PARAM',
        })
    public PARAM: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TIJDSTIP',
        })
    public TIJDSTIP: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'STOREID',
        })
    public STOREID: string | null;

    @Column('int', {
        nullable: true,
        name: 'ACTIVITY',
        })
    public ACTIVITY: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IDNUMBER_C',
        })
    public IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DESCRIP',
        })
    public DESCRIP: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRICESTARTDATECC',
        })
    public PRICESTARTDATECC: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRICEENDDATECC',
        })
    public PRICEENDDATECC: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SALESPRICECC',
        })
    public SALESPRICECC: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SALESPRICELL',
        })
    public SALESPRICELL: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRICESTARTDATELL',
        })
    public PRICESTARTDATELL: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRICEENDDATE',
        })
    public PRICEENDDATE: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'LOCALSUP',
        })
    public LOCALSUP: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ADJ_CREATIONDATE',
        })
    public ADJ_CREATIONDATE: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ADJ_APPLICATIONDATE',
        })
    public ADJ_APPLICATIONDATE: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ADJ_TREATEDDATE',
        })
    public ADJ_TREATEDDATE: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ADJ_USERID',
        })
    public ADJ_USERID: string | null;

}
