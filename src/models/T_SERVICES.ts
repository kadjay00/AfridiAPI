import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SERVICES', {schema: 'dbo' } )
export class T_SERVICES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 30,
        name: 'SER_SERVICE_C',
        })
    public SER_SERVICE_C: string;

}
