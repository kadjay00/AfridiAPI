import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CTRLRUPT_TYPE', {schema: 'dbo' } )
export class T_CTRLRUPT_TYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CRT_TYPE_C',
        })
    public CRT_TYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CRT_DESCRIPTIONFRA_C',
        })
    public CRT_DESCRIPTIONFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CRT_DESCRIPTIONNED_C',
        })
    public CRT_DESCRIPTIONNED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'CRT_SORT_N',
        })
    public CRT_SORT_N: number | null;

}
