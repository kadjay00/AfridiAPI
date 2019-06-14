import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_ORDERLINE_EAN', {schema: 'dbo' } )
export class T_ECOM_ORDERLINE_EAN {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'ORE_SEQUENCE_N',
        })
    public ORE_SEQUENCE_N: number;

    @Column('int', {
        nullable: false,
        name: 'ORE_ORDERID_N',
        })
    public ORE_ORDERID_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 10,
        scale: 0,
        name: 'ORE_RECORD_N',
        })
    public ORE_RECORD_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'ORE_EANUSED_C',
        })
    public ORE_EANUSED_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'ORE_WEIGHT_D',
        })
    public ORE_WEIGHT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORE_PRICE_D',
        })
    public ORE_PRICE_D: number | null;

}
