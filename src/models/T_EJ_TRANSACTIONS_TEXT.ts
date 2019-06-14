import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EJ_TRANSACTIONS_TEXT', {schema: 'dbo' } )
export class T_EJ_TRANSACTIONS_TEXT {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 12,
        scale: 0,
        name: 'EJX_ID_N',
        })
    public EJX_ID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'EJX_LINE_N',
        })
    public EJX_LINE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 75,
        name: 'EJX_TEXT_C',
        })
    public EJX_TEXT_C: string | null;

}
