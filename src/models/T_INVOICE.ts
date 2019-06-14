import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVOICE', {schema: 'dbo' } )
export class T_INVOICE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'INV_INVOICE_N',
        })
    public INV_INVOICE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'INV_DOCNUMBER_C',
        })
    public INV_DOCNUMBER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'INV_INVOICE_DAT',
        })
    public INV_INVOICE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'INV_STATUS_C',
        })
    public INV_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'INV_CURRENCY_C',
        })
    public INV_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'INV_TOTALCOST_D',
        })
    public INV_TOTALCOST_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'INV_TOTALTAX_D',
        })
    public INV_TOTALTAX_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'INV_USERID_C',
        })
    public INV_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'INV_CREATIONDATE_DAT',
        })
    public INV_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'INV_VALIDATIONDATE_DAT',
        })
    public INV_VALIDATIONDATE_DAT: Date | null;

}
