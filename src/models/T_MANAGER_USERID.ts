import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MANAGER_USERID', {schema: 'dbo' } )
export class T_MANAGER_USERID {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'MAU_TYPE_N',
        })
    public MAU_TYPE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MAU_MANAGER_N',
        })
    public MAU_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'MAU_USERID_C',
        })
    public MAU_USERID_C: string;

}
