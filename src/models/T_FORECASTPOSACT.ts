import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTPOSACT', {schema: 'dbo' } )
export class T_FORECASTPOSACT {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FPA_DATE_DAT',
        })
    public FPA_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'FPA_TYPE_C',
        })
    public FPA_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FPA_SLICEID_N',
        })
    public FPA_SLICEID_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 10,
        scale: 2,
        name: 'FPA_PRODSALES_N',
        })
    public FPA_PRODSALES_N: number;

    @Column('int', {
        nullable: false,
        name: 'FPA_CUSTOMERS_N',
        })
    public FPA_CUSTOMERS_N: number;

    @Column('int', {
        nullable: false,
        name: 'FPA_ITEMS_N',
        })
    public FPA_ITEMS_N: number;

    @Column('int', {
        nullable: true,
        name: 'FPA_ACTTERM_N',
        })
    public FPA_ACTTERM_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FPA_XXXLINES_N',
        })
    public FPA_XXXLINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FPA_XXXCOUPONS_N',
        })
    public FPA_XXXCOUPONS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FPA_PRICECURRENCY_C',
        })
    public FPA_PRICECURRENCY_C: string | null;

}
