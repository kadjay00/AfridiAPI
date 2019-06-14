import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LITIGES_LINE', {schema: 'dbo' } )
@Index('IX_IDNUMBER', ['LIL_IDNUMBER_C'])
@Index('IX_LITIGES_LINE_SHIPPINGNOTE', ['LIL_SHIPPINGNOTE_N'])
export class T_LITIGES_LINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'LIL_LITIGE_N',
        })
    public LIL_LITIGE_N: number;

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'LIL_SEQUENCER_N',
        })
    public LIL_SEQUENCER_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'LIL_SHIPPINGNOTE_N',
        })
    public LIL_SHIPPINGNOTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'LIL_SEQUENCE_N',
        })
    public LIL_SEQUENCE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'LIL_DOCNUMBER_C',
        })
    public LIL_DOCNUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LIL_DEPARTMENT_N',
        })
    public LIL_DEPARTMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LIL_SUBDEPARTMENT_N',
        })
    public LIL_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'LIL_GIBREF_C',
        })
    public LIL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LIL_IDNUMBER_C',
        })
    public LIL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LIL_ITEMDESCRIPFRA_C',
        })
    public LIL_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LIL_ITEMDESCRIPNED_C',
        })
    public LIL_ITEMDESCRIPNED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'LIL_SHIPPINGUNIT_D',
        })
    public LIL_SHIPPINGUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'LIL_CURRENCY_C',
        })
    public LIL_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LIL_SALESPRICE_D',
        })
    public LIL_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'LIL_COSTPRICE_D',
        })
    public LIL_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'LIL_COLLIS_D',
        })
    public LIL_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'LIL_COLLISDEF_D',
        })
    public LIL_COLLISDEF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LIL_PROVENANCE_C',
        })
    public LIL_PROVENANCE_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'LIL_RECEPTION_N',
        })
    public LIL_RECEPTION_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIL_RECEPTION_DAT',
        })
    public LIL_RECEPTION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'LIL_STATUS_C',
        })
    public LIL_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIL_STATUSDATE_DAT',
        })
    public LIL_STATUSDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIL_INVOICE_DAT',
        })
    public LIL_INVOICE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'LIL_MOTIF_C',
        })
    public LIL_MOTIF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'LIL_COUNTUNITDEF_D',
        })
    public LIL_COUNTUNITDEF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LIL_DELTA_DELIVERED_D',
        })
    public LIL_DELTA_DELIVERED_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LIL_ACCORD_C',
        })
    public LIL_ACCORD_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LIL_EMPTYUNITPRICE_D',
        })
    public LIL_EMPTYUNITPRICE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIL_FEEDBACK_DAT',
        })
    public LIL_FEEDBACK_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LIL_DOCTYPE_C',
        })
    public LIL_DOCTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LIL_REASONCODE_C',
        })
    public LIL_REASONCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'LIL_TAXPERCENTAGE_D',
        })
    public LIL_TAXPERCENTAGE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'LIL_SESSION_N',
        })
    public LIL_SESSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LIL_AGREEMENTNR_C',
        })
    public LIL_AGREEMENTNR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LIL_LOTNR_C',
        })
    public LIL_LOTNR_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIL_EXPIRATION_DAT',
        })
    public LIL_EXPIRATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LIL_PACKING_DAT',
        })
    public LIL_PACKING_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LIL_BRAND_C',
        })
    public LIL_BRAND_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 160,
        name: 'LIL_COMMENT_C',
        })
    public LIL_COMMENT_C: string | null;

}
