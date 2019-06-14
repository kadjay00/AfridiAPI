import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POP_UP_PARAMETERS', {schema: 'dbo' } )
export class T_POP_UP_PARAMETERS {

    @Column('nvarchar', {
        nullable: false,
        primary: true,
        length: 64,
        name: 'Name',
        })
    public Name: string;

    @Column('nvarchar', {
        nullable: false,
        length: 1024,
        name: 'Value',
        })
    public Value: string;

    @Column('bit', {
        nullable: false,
        primary: true,
        name: 'Local',
        })
    public Local: boolean;

    @Column('bit', {
        nullable: false,
        primary: true,
        name: 'Central',
        })
    public Central: boolean;

}
