import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_VOLUMETRIE_TYPE', {schema: 'dbo' } )
export class T_VOLUMETRIE_TYPE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'VOT_TYPE_N',
        })
    public VOT_TYPE_N: number;

    @Column('int', {
        nullable: false,
        name: 'VOT_NIVEAU_N',
        })
    public VOT_NIVEAU_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOT_DESCRIPFRA_C',
        })
    public VOT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOT_DESCRIPNED_C',
        })
    public VOT_DESCRIPNED_C: string | null;

}
