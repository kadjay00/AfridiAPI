import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FASTSALES', {schema: 'dbo' } )
export class T_FASTSALES {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'FAS_ID_N',
        })
    public FAS_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'FAS_IDNUMBER_C',
        })
    public FAS_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'FAS_TYPE_C',
        })
    public FAS_TYPE_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'FAS_VALUE_D',
        })
    public FAS_VALUE_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FAS_ACTIVESELLINGPRICE_D',
        })
    public FAS_ACTIVESELLINGPRICE_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FAS_PRICEBEFORE_D',
        })
    public FAS_PRICEBEFORE_D: number;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FAS_PRICEAFTER_D',
        })
    public FAS_PRICEAFTER_D: number | null;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'FAS_INPUT_C',
        })
    public FAS_INPUT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FAS_OUTPUT_C',
        })
    public FAS_OUTPUT_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'FAS_REASON_N',
        })
    public FAS_REASON_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'FAS_PRINT_N',
        })
    public FAS_PRINT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FAS_PRINTER_C',
        })
    public FAS_PRINTER_C: string | null;

    @Column('datetime', {
        nullable: false,
        name: 'FAS_DATE_DAT',
        })
    public FAS_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'FAS_USERID_C',
        })
    public FAS_USERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'FAS_PDT_C',
        })
    public FAS_PDT_C: string | null;

    @Column('tinyint', {
        nullable: false,
        name: 'FAS_LABELS_N',
        })
    public FAS_LABELS_N: number;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FAS_ORIGINE_C',
        })
    public FAS_ORIGINE_C: string | null;

}
