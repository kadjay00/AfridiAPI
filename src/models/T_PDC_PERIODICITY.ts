import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_PERIODICITY', {schema: 'dbo' } )
export class T_PDC_PERIODICITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PER_CODE_C',
        })
    public PER_CODE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PER_LANGUAGECODE_C',
        })
    public PER_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PER_DESCRIPTION_C',
        })
    public PER_DESCRIPTION_C: string | null;

}
