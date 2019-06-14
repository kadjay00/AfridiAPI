import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BAKEOFF_LINE', {schema: 'dbo' } )
export class T_BAKEOFF_LINE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'BAL_STOREID_C',
        })
    public BAL_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BAL_IDNUMBER_C',
        })
    public BAL_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'BAL_SUPPLIERID_C',
        })
    public BAL_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'BAL_SUPPLIERREF_C',
        })
    public BAL_SUPPLIERREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAL_SALESPRICE_D',
        })
    public BAL_SALESPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'BAL_PROMOPRICE_C',
        })
    public BAL_PROMOPRICE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAL_QUANTITYESTIMATED_N',
        })
    public BAL_QUANTITYESTIMATED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAL_QUANTITYORDERED_N',
        })
    public BAL_QUANTITYORDERED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAL_QUANTITYDELIVERED_N',
        })
    public BAL_QUANTITYDELIVERED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAL_STOCK_N',
        })
    public BAL_STOCK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'BAL_MULTIPLIER_N',
        })
    public BAL_MULTIPLIER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'BAL_PRICECURRENCY_C',
        })
    public BAL_PRICECURRENCY_C: string | null;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BAL_ID_N',
        })
    public BAL_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'BAL_QUANTITYDELIVERED_C',
        })
    public BAL_QUANTITYDELIVERED_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'BAL_RECEPTION_N',
        })
    public BAL_RECEPTION_N: number | null;

}
