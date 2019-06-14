import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_BLOCKPAY', {schema: 'dbo' } )
export class T_SUPPLIER_BLOCKPAY {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'BPA_BLOCKPAY_C',
        })
    public BPA_BLOCKPAY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'BPA_LAN_C',
        })
    public BPA_LAN_C: string;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'BPA_DESCR_C',
        })
    public BPA_DESCR_C: string | null;

}
