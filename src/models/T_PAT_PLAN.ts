import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PAT_PLAN', {schema: 'dbo' } )
export class T_PAT_PLAN {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAP_SUBDEP_N',
        })
    public PAP_SUBDEP_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAP_MAINDAY_N',
        })
    public PAP_MAINDAY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAP_OTHERDAY_N',
        })
    public PAP_OTHERDAY_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PAP_PERCENTAGE_D',
        })
    public PAP_PERCENTAGE_D: number | null;

}
