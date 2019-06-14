import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SERVICE_CODES', {schema: 'dbo' } )
export class T_SERVICE_CODES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SIC_CODEID_C',
        })
    public SIC_CODEID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'SIC_ITEMGROUP_C',
        })
    public SIC_ITEMGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SIC_CODE_C',
        })
    public SIC_CODE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'SIC_LANGUAGECODE_C',
        })
    public SIC_LANGUAGECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SIC_DESCRIPTION_C',
        })
    public SIC_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SIC_DATA_C',
        })
    public SIC_DATA_C: string | null;

}
