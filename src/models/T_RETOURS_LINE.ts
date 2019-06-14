import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOURS_LINE', {schema: 'dbo' } )
@Index('IX_IDNUMBER', ['RTL_IDNUMBER_C'])
@Index('IX_RETOURS_LINE_SHIPPINGNOTE', ['RTL_SHIPPINGNOTE_N'])
export class T_RETOURS_LINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'RTL_RETOURS_N',
        })
    public RTL_RETOURS_N: number;

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // recision:10,
        // scale:0,
        name: 'RTL_SEQUENCER_N',
        })
    public RTL_SEQUENCER_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RTL_SHIPPINGNOTE_N',
        })
    public RTL_SHIPPINGNOTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'RTL_SEQUENCE_N',
        })
    public RTL_SEQUENCE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RTL_DEPARTEMENT_N',
        })
    public RTL_DEPARTEMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RTL_SUBDEPARTMENT_N',
        })
    public RTL_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'RTL_GIBREF_C',
        })
    public RTL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RTL_IDNUMBER_C',
        })
    public RTL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RTL_ITEMDESCRIPFRA_C',
        })
    public RTL_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RTL_ITEMDESCRIPNED_C',
        })
    public RTL_ITEMDESCRIPNED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'RTL_SHIPPINGUNIT_D',
        })
    public RTL_SHIPPINGUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'RTL_CURRENCY_C',
        })
    public RTL_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'RTL_SALESPRICE_D',
        })
    public RTL_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RTL_COSTPRICE_D',
        })
    public RTL_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RTL_COLLIS_D',
        })
    public RTL_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'RTL_NEGOCIATEPRICE_D',
        })
    public RTL_NEGOCIATEPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'RTL_DECOTE_D',
        })
    public RTL_DECOTE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'RTL_PROVENANCE_C',
        })
    public RTL_PROVENANCE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RTL_COLLISEXPED_D',
        })
    public RTL_COLLISEXPED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RTL_COLLISACCEPTED_D',
        })
    public RTL_COLLISACCEPTED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'RTL_EMPTYUNITPRICE_D',
        })
    public RTL_EMPTYUNITPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'RTL_ORIGIN_C',
        })
    public RTL_ORIGIN_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'RTL_MOTIF_N',
        })
    public RTL_MOTIF_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'RTL_QUANTITY_D',
        })
    public RTL_QUANTITY_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'RTL_APPROVED_C',
        })
    public RTL_APPROVED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RTL_FLAGTYPE_C',
        })
    public RTL_FLAGTYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RTL_PACKAGE_N',
        })
    public RTL_PACKAGE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RTL_REPRISE_N',
        })
    public RTL_REPRISE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RTL_RECORD_N',
        })
    public RTL_RECORD_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'RTL_STOCK_D',
        })
    public RTL_STOCK_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'RTL_EANCODE_N',
        })
    public RTL_EANCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 24,
        name: 'RTL_ROWLINK_C',
        })
    public RTL_ROWLINK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RTL_CODE128_C',
        })
    public RTL_CODE128_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 3,
        name: 'RTL_CODE128WEIGHT_D',
        })
    public RTL_CODE128WEIGHT_D: number | null;

}
