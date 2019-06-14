import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER_ORDERID', {schema: 'dbo' } )
export class T_ORDER_ORDERID {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'ORO_STOREID_C',
        })
    public ORO_STOREID_C: string;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'ORO_YEAR_N',
        })
    public ORO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORO_ORDERID_N',
        })
    public ORO_ORDERID_N: number;

}
