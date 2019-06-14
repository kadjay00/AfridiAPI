import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORPLANNSUM', {schema: 'dbo' } )
export class T_FORPLANNSUM {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FAS_DATE_DAT',
        })
    public FAS_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'FAS_TYPE_C',
        })
    public FAS_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'FAS_YEAR_N',
        })
    public FAS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'FAS_WEEKOFYEAR_N',
        })
    public FAS_WEEKOFYEAR_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 11,
        scale: 2,
        name: 'FAS_PRODSALES_N',
        })
    public FAS_PRODSALES_N: number;

    @Column('int', {
        nullable: false,
        name: 'FAS_CUSTOMERS_N',
        })
    public FAS_CUSTOMERS_N: number;

    @Column('int', {
        nullable: false,
        name: 'FAS_ITEMS_N',
        })
    public FAS_ITEMS_N: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FAS_PRICECURRENCY_C',
        })
    public FAS_PRICECURRENCY_C: string | null;

}
