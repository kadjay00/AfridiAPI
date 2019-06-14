import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_WORK', {schema: 'dbo' } )
export class T_PDC_WORK {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'tmp_pdcnumber_n',
        })
    public tmp_pdcnumber_n: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'tmp_idnumber_c',
        })
    public tmp_idnumber_c: string;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'tmp_coeffseason_d',
        })
    public tmp_coeffseason_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'tmp_coeffexcept_d',
        })
    public tmp_coeffexcept_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'tmp_coeffvarlocart_d',
        })
    public tmp_coeffvarlocart_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'tmp_averagesale_d',
        })
    public tmp_averagesale_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'tmp_salestock_d',
        })
    public tmp_salestock_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'tmp_stock_d',
        })
    public tmp_stock_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'tmp_qtyopenorders_d',
        })
    public tmp_qtyopenorders_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'tmp_shippingunit_d',
        })
    public tmp_shippingunit_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'tmp_qtycoeff_d',
        })
    public tmp_qtycoeff_d: number | null;

    @Column('int', {
        nullable: true,
        name: 'tmp_stockmode_n',
        })
    public tmp_stockmode_n: number | null;

    @Column('int', {
        nullable: true,
        name: 'tmp_maxordered_n',
        })
    public tmp_maxordered_n: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'tmp_qtyordered_d',
        })
    public tmp_qtyordered_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'tmp_qtyproposed_d',
        })
    public tmp_qtyproposed_d: number | null;

    @Column('char', {
        nullable: true,
        name: 'tmp_brandroundmode_c',
        })
    public tmp_brandroundmode_c: string | null;

    @Column('char', {
        nullable: true,
        name: 'tmp_famroundmode_c',
        })
    public tmp_famroundmode_c: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'tmp_coeffvarloccom_d',
        })
    public tmp_coeffvarloccom_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'tmp_usedcoeff_d',
        })
    public tmp_usedcoeff_d: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'tmp_consideredsale_d',
        })
    public tmp_consideredsale_d: number | null;

}
