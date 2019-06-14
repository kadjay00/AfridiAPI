import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_ACTIVITY', {schema: 'dbo' } )
export class T_POS_ACTIVITY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAC_NUMBERID_N',
        })
    public PAC_NUMBERID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAC_SLICEID_N',
        })
    public PAC_SLICEID_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PAC_DATEDATA_DAT',
        })
    public PAC_DATEDATA_DAT: Date;

    @Column('int', {
        nullable: true,
        name: 'PAC_TYPEID_N',
        })
    public PAC_TYPEID_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 2,
        name: 'PAC_PRODSALES_N',
        })
    public PAC_PRODSALES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAC_CUSTOMERS_N',
        })
    public PAC_CUSTOMERS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAC_LINES_N',
        })
    public PAC_LINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAC_ITEMS_N',
        })
    public PAC_ITEMS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAC_COUPONS_N',
        })
    public PAC_COUPONS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAC_ACTTERM_N',
        })
    public PAC_ACTTERM_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PAC_PRICECURRENCY_C',
        })
    public PAC_PRICECURRENCY_C: string | null;

}
