import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PERIODEPUBLICATION', {schema: 'dbo' } )
export class T_PERIODEPUBLICATION {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PPL_PERIODEFOODNONFOOD_C',
        })
    public PPL_PERIODEFOODNONFOOD_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PPL_PERIODENBR_C',
        })
    public PPL_PERIODENBR_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PPL_PUBLTYPE_C',
        })
    public PPL_PUBLTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PPL_ACTIVITY_N',
        })
    public PPL_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PPL_SUBDEPARTMENT_N',
        })
    public PPL_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PPL_LVL2CHECKED_C',
        })
    public PPL_LVL2CHECKED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PPL_LVL3CHECKED_C',
        })
    public PPL_LVL3CHECKED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PPL_LVL4CHECKED_C',
        })
    public PPL_LVL4CHECKED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PPL_LVL5CHECKED_C',
        })
    public PPL_LVL5CHECKED_C: string | null;

}
