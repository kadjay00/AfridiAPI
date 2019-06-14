import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTSUBDEP_PARAM', {schema: 'dbo' } )
export class T_ACTSUBDEP_PARAM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_KEY_C',
        })
    public PAR_KEY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 35,
        name: 'PAR_TYPE_C',
        })
    public PAR_TYPE_C: string;

    @Column('char', {
        nullable: false,
        length: 2,
        name: 'PAR_GROUP_C',
        })
    public PAR_GROUP_C: string;

    @Column('int', {
        nullable: false,
        name: 'PAR_ACTIVITY_N',
        })
    public PAR_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAR_SDEP_N',
        })
    public PAR_SDEP_N: number;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PAR_TEXT_C',
        })
    public PAR_TEXT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PAR_VALUE_D',
        })
    public PAR_VALUE_D: number | null;

}
