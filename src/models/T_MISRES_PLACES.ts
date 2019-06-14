import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MISRES_PLACES', {schema: 'dbo' } )
export class T_MISRES_PLACES {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'MRP_LOCALISATION_C',
        })
    public MRP_LOCALISATION_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MRP_DESCRIPTIONNED_C',
        })
    public MRP_DESCRIPTIONNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MRP_DESCRIPTIONFRA_C',
        })
    public MRP_DESCRIPTIONFRA_C: string | null;

}
