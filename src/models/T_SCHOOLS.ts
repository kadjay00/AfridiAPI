import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SCHOOLS', {schema: 'dbo' } )
export class T_SCHOOLS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'SCH_TYPE_C',
        })
    public SCH_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SCH_SEQUENCE_N',
        })
    public SCH_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        name: 'SCH_DESCRIPTION_C',
        })
    public SCH_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SCH_COMMENT_C',
        })
    public SCH_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SCH_BATCHFILE_C',
        })
    public SCH_BATCHFILE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SCH_TYPEFILE_C',
        })
    public SCH_TYPEFILE_C: string | null;

}
