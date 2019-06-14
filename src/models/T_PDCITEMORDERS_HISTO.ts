import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDCITEMORDERS_HISTO', {schema: 'dbo' } )
export class T_PDCITEMORDERS_HISTO {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PIO_PDCNUMBER_N',
        })
    public PIO_PDCNUMBER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PIO_IDNUMBER_C',
        })
    public PIO_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'PIO_STOREID_C',
        })
    public PIO_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PIO_YEAR_N',
        })
    public PIO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PIO_ORDERID_N',
        })
    public PIO_ORDERID_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PIO_QTYORDER_D',
        })
    public PIO_QTYORDER_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIO_DELIVDATE_DAT',
        })
    public PIO_DELIVDATE_DAT: Date | null;

}
