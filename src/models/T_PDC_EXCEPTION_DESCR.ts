import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_EXCEPTION_DESCR', {schema: 'dbo' } )
export class T_PDC_EXCEPTION_DESCR {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PED_CODE_C',
        })
    public PED_CODE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PED_LANGUAGECODE_C',
        })
    public PED_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'PED_DESCRIPTION_C',
        })
    public PED_DESCRIPTION_C: string | null;

}
