import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_CENTRAL_USERS', {schema: 'dbo' } )
export class T_PDC_CENTRAL_USERS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'PCU_USERID_C',
        })
    public PCU_USERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'PCU_LOCAL_C',
        })
    public PCU_LOCAL_C: string;

}
