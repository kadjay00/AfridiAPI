import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE', {schema: 'dbo' } )
@Index('IX_REPRISE_INVENTAIREID', ['RE_TYPE_C', 'RE_INVENTAIREID_N', 'RE_EMPLAPP_N', 'RE_ARTICLE_C'])
@Index('IX_REPRISE_TYPE', ['RE_TYPE_C', 'RE_FLAGTRAITEMENT_C'])
export class T_REPRISE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RE_REPRISE_N',
        })
    public RE_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RE_RECORD_N',
        })
    public RE_RECORD_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'RE_REPRISE_DAT',
        })
    public RE_REPRISE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'RE_LDTID_C',
        })
    public RE_LDTID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RE_FLAGTRAITEMENT_C',
        })
    public RE_FLAGTRAITEMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RE_TYPE_C',
        })
    public RE_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RE_INVENTAIREID_N',
        })
    public RE_INVENTAIREID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RE_EMPLAPP_N',
        })
    public RE_EMPLAPP_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'RE_FLAG_TYPE_C',
        })
    public RE_FLAG_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RE_ARTICLE_C',
        })
    public RE_ARTICLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RE_SIGNE_C',
        })
    public RE_SIGNE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RE_QUANTITY_D',
        })
    public RE_QUANTITY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RE_PRICE1_D',
        })
    public RE_PRICE1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RE_PRICE2_D',
        })
    public RE_PRICE2_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'RE_SAISIE_N',
        })
    public RE_SAISIE_N: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'RE_ERRORMESSAGE_C',
        })
    public RE_ERRORMESSAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'STO_STOREID_C',
        })
    public STO_STOREID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'RE_PDTLINE_C',
        })
    public RE_PDTLINE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'RE_PRICECURRENCY_C',
        })
    public RE_PRICECURRENCY_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RE_RECALAGE_N',
        })
    public RE_RECALAGE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'RE_SALESFAMILY_C',
        })
    public RE_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RE_RECEPTION_C',
        })
    public RE_RECEPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 22,
        name: 'RE_PALETTE_C',
        })
    public RE_PALETTE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'RE_SIGNE2_C',
        })
    public RE_SIGNE2_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RE_ERRORCODE_N',
        })
    public RE_ERRORCODE_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RE_CTRLRUPT_N',
        })
    public RE_CTRLRUPT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 3,
        name: 'RE_WEIGHT_D',
        })
    public RE_WEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 28,
        name: 'RE_CODE128_C',
        })
    public RE_CODE128_C: string | null;

}
