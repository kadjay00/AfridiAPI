import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTSTORE', {schema: 'dbo' } )
export class T_FORECASTSTORE {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FST_DATE_DAT',
        })
    public FST_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'FST_TYPE_C',
        })
    public FST_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'FST_YEAR_N',
        })
    public FST_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'FST_WEEKOFYEAR_N',
        })
    public FST_WEEKOFYEAR_N: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'FST_PRICECURRENCY_C',
        })
    public FST_PRICECURRENCY_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 11,
        scale: 2,
        name: 'FST_PV_D',
        })
    public FST_PV_D: number;

    @Column('numeric', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'FST_PRODSALES_N',
        })
    public FST_PRODSALES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FST_CUSTOMERS_N',
        })
    public FST_CUSTOMERS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FST_ITEMS_N',
        })
    public FST_ITEMS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FST_ACTTERM_N',
        })
    public FST_ACTTERM_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FST_XXXLINES_N',
        })
    public FST_XXXLINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FST_XXXCOUPONS_N',
        })
    public FST_XXXCOUPONS_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'FST_PRODSALESFE_N',
        })
    public FST_PRODSALESFE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'FST_OPEN_C',
        })
    public FST_OPEN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'FST_CLOSE_C',
        })
    public FST_CLOSE_C: string | null;

}
