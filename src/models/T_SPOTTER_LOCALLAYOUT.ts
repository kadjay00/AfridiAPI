import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_LOCALLAYOUT', {schema: 'dbo' } )
export class T_SPOTTER_LOCALLAYOUT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 20,
        name: 'SPL_LOCALTYPE_C',
        })
    public SPL_LOCALTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'SPL_LAYOUT_C',
        })
    public SPL_LAYOUT_C: string;

    @Column('char', {
        nullable: true,
        name: 'SPL_DEFAULTHEADER_C',
        })
    public SPL_DEFAULTHEADER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPL_ALLOWREPRISE_C',
        })
    public SPL_ALLOWREPRISE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPL_REPRISEDESCFRA_C',
        })
    public SPL_REPRISEDESCFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPL_REPRISEDESCNED_C',
        })
    public SPL_REPRISEDESCNED_C: string | null;

}
