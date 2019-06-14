import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_VOLUMETRIE_FACTOR', {schema: 'dbo' } )
export class T_VOLUMETRIE_FACTOR {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'VOF_FACTORID_C',
        })
    public VOF_FACTORID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'VOF_REPORT_C',
        })
    public VOF_REPORT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'VOF_TYPE_N',
        })
    public VOF_TYPE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOF_DESCRIPFRA_C',
        })
    public VOF_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOF_DESCRIPNED_C',
        })
    public VOF_DESCRIPNED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'VOF_SIDE_N',
        })
    public VOF_SIDE_N: number | null;

}
