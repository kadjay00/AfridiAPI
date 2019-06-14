import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PC_ITEMREMARK_TYPE', {schema: 'dbo' } )
export class T_PC_ITEMREMARK_TYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PIS_TYPE_C',
        })
    public PIS_TYPE_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'PIS_SORTORDER_N',
        })
    public PIS_SORTORDER_N: number;

}
