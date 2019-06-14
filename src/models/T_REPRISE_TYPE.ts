import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_TYPE', {schema: 'dbo' } )
export class T_REPRISE_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'RET_REPRISETYPE_C',
        })
    public RET_REPRISETYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RET_DESCRIPNED_C',
        })
    public RET_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RET_DESCRIPFRA_C',
        })
    public RET_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RET_FLAG_C',
        })
    public RET_FLAG_C: string | null;

}
