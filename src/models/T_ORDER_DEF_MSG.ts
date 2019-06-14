import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER_DEF_MSG', {schema: 'dbo' } )
export class T_ORDER_DEF_MSG {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'OME_STOREID_C',
        })
    public OME_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OME_YEAR_N',
        })
    public OME_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OME_ORDERID_N',
        })
    public OME_ORDERID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'OME_MSGID',
        })
    public OME_MSGID: string;

    @Column('varchar', {
        nullable: true,
        name: 'OME_ERRVALUE_C',
        })
    public OME_ERRVALUE_C: string | null;

}
