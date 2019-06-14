import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DINFO', {schema: 'dbo' } )
export class T_CS_DINFO {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CDI_REPORTID_N',
        })
    public CDI_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'CDI_PAGEBREAK_N',
        })
    public CDI_PAGEBREAK_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'CDI_KEYID_N',
        })
    public CDI_KEYID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'CDI_TEXT_C',
        })
    public CDI_TEXT_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CDI_FCVV_C',
        })
    public CDI_FCVV_C: string;

}
