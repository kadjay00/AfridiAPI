import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PERMREDTYPE', {schema: 'dbo' } )
export class T_PERMREDTYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PRT_PERMREDTYPE_C',
        })
    public PRT_PERMREDTYPE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PRT_LANGUAGECODE_C',
        })
    public PRT_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PRT_DESCRIPTION_C',
        })
    public PRT_DESCRIPTION_C: string | null;

}
