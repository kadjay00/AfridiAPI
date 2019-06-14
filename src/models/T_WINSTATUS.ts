import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_WINSTATUS', {schema: 'dbo' } )
export class T_WINSTATUS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'WST_FUNCTION_C',
        })
    public WST_FUNCTION_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'WST_CODE_C',
        })
    public WST_CODE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'WST_LANGUAGE_C',
        })
    public WST_LANGUAGE_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'WST_DESCRIPTION_C',
        })
    public WST_DESCRIPTION_C: string | null;

}
