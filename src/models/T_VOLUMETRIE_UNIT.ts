import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_VOLUMETRIE_UNIT', {schema: 'dbo' } )
export class T_VOLUMETRIE_UNIT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'VOU_UNITCODE_C',
        })
    public VOU_UNITCODE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'VOU_TYPE_N',
        })
    public VOU_TYPE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'VOU_UNITFRA_C',
        })
    public VOU_UNITFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'VOU_UNITNED_C',
        })
    public VOU_UNITNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOU_DESCRIPFRA_C',
        })
    public VOU_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOU_DESCRIPNED_C',
        })
    public VOU_DESCRIPNED_C: string | null;

}
