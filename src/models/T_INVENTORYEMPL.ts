import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYEMPL', {schema: 'dbo' } )
export class T_INVENTORYEMPL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INE_EMPLACEMENT_N',
        })
    public INE_EMPLACEMENT_N: number;

}
