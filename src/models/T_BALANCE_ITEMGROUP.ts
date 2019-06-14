import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_ITEMGROUP', {schema: 'dbo' } )
export class T_BALANCE_ITEMGROUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BIG_IDNUMBER_C',
        })
    public BIG_IDNUMBER_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'BIG_ITEMGROUP_N',
        })
    public BIG_ITEMGROUP_N: number;

}
