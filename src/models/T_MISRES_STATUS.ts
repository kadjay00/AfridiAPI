import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MISRES_STATUS', {schema: 'dbo' } )
export class T_MISRES_STATUS {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'MST_STATUSCODE_C',
        })
    public MST_STATUSCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MST_DESCRIPTIONNED_C',
        })
    public MST_DESCRIPTIONNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MST_DESCRIPTIONFRA_C',
        })
    public MST_DESCRIPTIONFRA_C: string | null;

}
