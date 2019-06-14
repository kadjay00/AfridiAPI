import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ARS', {schema: 'dbo' } )
export class T_ARS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'ARS_KEY_C',
        })
    public ARS_KEY_C: string;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'ARS_SEQUENCE_N',
        })
    public ARS_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'ARS_FIELD_C',
        })
    public ARS_FIELD_C: string;

    @Column('varchar', {
        nullable: false,
        length: 100,
        name: 'ARS_VALUE_C',
        })
    public ARS_VALUE_C: string;

}
