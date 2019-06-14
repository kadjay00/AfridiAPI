import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDT_INTERFACE', {schema: 'dbo' } )
export class T_PDT_INTERFACE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 20,
        name: 'PDT_INTERFACE_C',
        })
    public PDT_INTERFACE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'PDT_TYPE_REPRISE_C',
        })
    public PDT_TYPE_REPRISE_C: string;

    @Column('char', {
        nullable: true,
        length: 35,
        name: 'PDT_DIRECTORY_C',
        })
    public PDT_DIRECTORY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDT_FLAGSELECT_C',
        })
    public PDT_FLAGSELECT_C: string | null;

    @Column('char', {
        nullable: true,
        length: 10,
        name: 'PDT_FILENAME_C',
        })
    public PDT_FILENAME_C: string | null;

}
