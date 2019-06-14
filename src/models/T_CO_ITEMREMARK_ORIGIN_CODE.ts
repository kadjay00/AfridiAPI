import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_ITEMREMARK_ORIGIN_CODE', {schema: 'dbo' } )
export class T_CO_ITEMREMARK_ORIGIN_CODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IRO_ORIGIN_C',
        })
    public IRO_ORIGIN_C: string;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'IRO_REMARKID_N',
        })
    public IRO_REMARKID_N: number;

}
