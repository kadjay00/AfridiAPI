import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDCQITEMORDERS', {schema: 'dbo' } )
export class T_PDCQITEMORDERS {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'QIO_PDCNUMBER_N',
        })
    public QIO_PDCNUMBER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'QIO_IDNUMBER_C',
        })
    public QIO_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'QIO_STOREID_C',
        })
    public QIO_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'QIO_YEAR_N',
        })
    public QIO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'QIO_ORDERID_N',
        })
    public QIO_ORDERID_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'QIO_QTYORDER_D',
        })
    public QIO_QTYORDER_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'QIO_DELIVDATE_DAT',
        })
    public QIO_DELIVDATE_DAT: Date | null;

}
