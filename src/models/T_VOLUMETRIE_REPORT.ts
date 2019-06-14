import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_VOLUMETRIE_REPORT', {schema: 'dbo' } )
export class T_VOLUMETRIE_REPORT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'VOR_REPORT_C',
        })
    public VOR_REPORT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'VOR_DESCRIPFRA_C',
        })
    public VOR_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'VOR_DESCRIPNED_C',
        })
    public VOR_DESCRIPNED_C: string;

}
