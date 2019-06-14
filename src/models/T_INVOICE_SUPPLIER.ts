import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVOICE_SUPPLIER', {schema: 'dbo' } )
export class T_INVOICE_SUPPLIER {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'INS_INVOICE_N',
        })
    public INS_INVOICE_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'INS_SUPPLIERID_C',
        })
    public INS_SUPPLIERID_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'INS_TOTALCOST_D',
        })
    public INS_TOTALCOST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'INS_TOTALTAX_D',
        })
    public INS_TOTALTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'INS_TRANSPORT_D',
        })
    public INS_TRANSPORT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'INS_STATUS_C',
        })
    public INS_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'INS_STATUSDATE_DAT',
        })
    public INS_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'INS_PRICECURRENCY_C',
        })
    public INS_PRICECURRENCY_C: string | null;

}
