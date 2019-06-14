import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDERL_DEF_MSG', {schema: 'dbo' } )
export class T_ORDERL_DEF_MSG {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'OLM_STOREID_C',
        })
    public OLM_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OLM_YEAR_N',
        })
    public OLM_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OLM_ORDERID_N',
        })
    public OLM_ORDERID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'OLM_RECORD_N',
        })
    public OLM_RECORD_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'OLM_MSGID',
        })
    public OLM_MSGID: string;

    @Column('varchar', {
        nullable: true,
        name: 'OLM_ERRVALUE_C',
        })
    public OLM_ERRVALUE_C: string | null;

}
