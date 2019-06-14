import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIONDEF', {schema: 'dbo' } )
export class T_ACTIONDEF {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'ACT_ACTIONID_N',
        })
    public ACT_ACTIONID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ACT_DESCRIPTION_C',
        })
    public ACT_DESCRIPTION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ACT_CREATION_DAT',
        })
    public ACT_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'ACT_MODIFICATION_DAT',
        })
    public ACT_MODIFICATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ACT_USER_C',
        })
    public ACT_USER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACT_STATE_C',
        })
    public ACT_STATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'ACT_COMMENT_C',
        })
    public ACT_COMMENT_C: string | null;

}
