import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORHISTO', {schema: 'dbo' } )
export class T_FORHISTO {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'FHI_FORYEAR_N',
        })
    public FHI_FORYEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'FHI_FORWEEK_N',
        })
    public FHI_FORWEEK_N: number;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FHI_REFERENCE1_C',
        })
    public FHI_REFERENCE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FHI_REFERENCE2_C',
        })
    public FHI_REFERENCE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FHI_REFERENCE3_C',
        })
    public FHI_REFERENCE3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FHI_REFERENCE4_C',
        })
    public FHI_REFERENCE4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FHI_REFERENCE5_C',
        })
    public FHI_REFERENCE5_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FHI_REFERENCE6_C',
        })
    public FHI_REFERENCE6_C: string | null;

}
