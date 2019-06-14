import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_GROUP', {schema: 'dbo' } )
export class T_GROUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'GRP_GROUP_C',
        })
    public GRP_GROUP_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'GRP_LANGUAGECODE_C',
        })
    public GRP_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'GRP_DESCRIPTION_C',
        })
    public GRP_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'GRP_FLAGDELETE_C',
        })
    public GRP_FLAGDELETE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'GRP_INTROSUP_C',
        })
    public GRP_INTROSUP_C: string | null;

}
