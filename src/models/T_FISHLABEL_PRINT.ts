import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FISHLABEL_PRINT', {schema: 'dbo' } )
export class T_FISHLABEL_PRINT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'FLP_PRINTID_N',
        })
    public FLP_PRINTID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLP_WORKID_C',
        })
    public FLP_WORKID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'FLP_IDNUMBER_C',
        })
    public FLP_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLP_LAYOUT_C',
        })
    public FLP_LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLP_FORMAT_C',
        })
    public FLP_FORMAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLP_PLU_C',
        })
    public FLP_PLU_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLP_DESCRIPTION1_C',
        })
    public FLP_DESCRIPTION1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLP_DESCRIPTION2_C',
        })
    public FLP_DESCRIPTION2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLP_ORIGINE1_C',
        })
    public FLP_ORIGINE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLP_ORIGINE2_C',
        })
    public FLP_ORIGINE2_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FLP_PRICE_D',
        })
    public FLP_PRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'FLP_CHARACTERISTIC_C',
        })
    public FLP_CHARACTERISTIC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_VARWEIGHTUNIT_C',
        })
    public FLP_VARWEIGHTUNIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLP_LOGOFILE_C',
        })
    public FLP_LOGOFILE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FLP_WATERMARKFILE_C',
        })
    public FLP_WATERMARKFILE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_POACH_C',
        })
    public FLP_POACH_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_STEAM_C',
        })
    public FLP_STEAM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_OVEN_C',
        })
    public FLP_OVEN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_PAN_C',
        })
    public FLP_PAN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_GRILL_C',
        })
    public FLP_GRILL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_FRIE_C',
        })
    public FLP_FRIE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_DEFROSTED_C',
        })
    public FLP_DEFROSTED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FLP_LOGOEXTENTION_C',
        })
    public FLP_LOGOEXTENTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FLP_WATERMARKEXTENTION_C',
        })
    public FLP_WATERMARKEXTENTION_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FLP_REGULARPRICE_D',
        })
    public FLP_REGULARPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FLP_MINADVANTAGE_D',
        })
    public FLP_MINADVANTAGE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'FLP_CABCOEFF_D',
        })
    public FLP_CABCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_CABCODE_C',
        })
    public FLP_CABCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FLP_CABDESCRIP_C',
        })
    public FLP_CABDESCRIP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLP_PRINTCABPRICE_C',
        })
    public FLP_PRINTCABPRICE_C: string | null;

}
