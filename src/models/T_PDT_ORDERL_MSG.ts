import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDT_ORDERL_MSG', {schema: 'dbo' } )
export class T_PDT_ORDERL_MSG {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'POL_PDTORDERID_N',
        })
    public POL_PDTORDERID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'POL_PDTRECORD_N',
        })
    public POL_PDTRECORD_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'POL_MSGID',
        })
    public POL_MSGID: string;

    @Column('varchar', {
        nullable: true,
        name: 'POL_ERRVALUE_C',
        })
    public POL_ERRVALUE_C: string | null;

}
