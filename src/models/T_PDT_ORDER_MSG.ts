import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDT_ORDER_MSG', {schema: 'dbo' } )
export class T_PDT_ORDER_MSG {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PDM_PDTORDERID_N',
        })
    public PDM_PDTORDERID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'PDM_MSGID',
        })
    public PDM_MSGID: string;

    @Column('varchar', {
        nullable: true,
        name: 'PDM_ERRVALUE_C',
        })
    public PDM_ERRVALUE_C: string | null;

}
