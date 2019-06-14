import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDERTYPE', {schema: 'dbo' } )
export class T_FOLDERTYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'FOL_FOLDERTYPE_C',
        })
    public FOL_FOLDERTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FOL_DESCRIPNED_C',
        })
    public FOL_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'FOL_DESCRIPFRA_C',
        })
    public FOL_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'FOL_USERID_C',
        })
    public FOL_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FOL_FLAGDELETE_C',
        })
    public FOL_FLAGDELETE_C: string | null;

}
