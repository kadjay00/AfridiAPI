import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CATGROUP', {schema: 'dbo' } )
export class T_CATGROUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'CAG_CATGROUPID_C',
        })
    public CAG_CATGROUPID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAG_DESCRIPFRA_C',
        })
    public CAG_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAG_DESCRIPNED_C',
        })
    public CAG_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CAG_USERID_C',
        })
    public CAG_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CAG_FLAGDELETE_C',
        })
    public CAG_FLAGDELETE_C: string | null;

}
