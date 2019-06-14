import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PAT', {schema: 'dbo' } )
export class T_PAT {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'PAT_SUBDEP1_N',
        })
    public PAT_SUBDEP1_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAT_TYPE1_N',
        })
    public PAT_TYPE1_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAT_SUBDEP2_N',
        })
    public PAT_SUBDEP2_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAT_TYPE2_N',
        })
    public PAT_TYPE2_N: number;

}
