import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_APPS', {schema: 'dbo' } )
@Index('SECURITY_APPS_X', ['APPLICATION'], {unique: true})
export class SECURITY_APPS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 32,
        name: 'APPLICATION',
        })
    public APPLICATION: string;

    @Column('varchar', {
        nullable: false,
        length: 64,
        name: 'DESCRIPTION',
        })
    public DESCRIPTION: string;

}
