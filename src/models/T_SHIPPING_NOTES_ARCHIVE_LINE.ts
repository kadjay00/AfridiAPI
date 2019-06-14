import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SHIPPING_NOTES_ARCHIVE_LINE', {schema: 'dbo' } )
export class T_SHIPPING_NOTES_ARCHIVE_LINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SHL_SHIPPINGNOTE_N',
        })
    public SHL_SHIPPINGNOTE_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'SHL_SEQUENCE_N',
        })
    public SHL_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_DOCTYPE_C',
        })
    public SHL_DOCTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SHL_IDNUMBER_C',
        })
    public SHL_IDNUMBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'SHL_COLLIS_D',
        })
    public SHL_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SHL_SHIPPINGUNIT_D',
        })
    public SHL_SHIPPINGUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SHL_ORIGINE_DOCTYPE_C',
        })
    public SHL_ORIGINE_DOCTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_ORIGINE_DOCNUMBER_N',
        })
    public SHL_ORIGINE_DOCNUMBER_N: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SSCC1_C',
        })
    public SHL_SSCC1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SSCC2_C',
        })
    public SHL_SSCC2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SHL_SSCC3_C',
        })
    public SHL_SSCC3_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SHL_DLUO_DAT',
        })
    public SHL_DLUO_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 14,
        name: 'SHL_LOT_NUMBER_C',
        })
    public SHL_LOT_NUMBER_C: string | null;

}
