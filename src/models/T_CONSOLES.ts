import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CONSOLES', {schema: 'dbo' } )
export class T_CONSOLES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRC_CONSOLEID_C',
        })
    public PRC_CONSOLEID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRC_DESCRIPTIONFRA_C',
        })
    public PRC_DESCRIPTIONFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRC_DESCRIPTIONNED_C',
        })
    public PRC_DESCRIPTIONNED_C: string | null;

}
