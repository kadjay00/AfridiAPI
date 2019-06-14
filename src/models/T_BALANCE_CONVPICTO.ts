import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_CONVPICTO', {schema: 'dbo' } )
export class T_BALANCE_CONVPICTO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'BPC_PICTO_MISQS',
        })
    public BPC_PICTO_MISQS: string;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'BPC_PICTO_WINSTORE',
        })
    public BPC_PICTO_WINSTORE: string | null;

}
