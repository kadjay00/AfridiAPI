import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_TEMPLATE', {schema: 'dbo' } )
@Index('SECURITY_TEMPLATE_X', ['APPLICATION', 'WINDOW', 'CONTROL'], {unique: true})
export class SECURITY_TEMPLATE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 32,
        name: 'APPLICATION',
        })
    public APPLICATION: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 64,
        name: 'WINDOW',
        })
    public WINDOW: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 128,
        name: 'CONTROL',
        })
    public CONTROL: string;

    @Column('varchar', {
        nullable: false,
        length: 254,
        name: 'DESCRIPTION',
        })
    public DESCRIPTION: string;

    @Column('varchar', {
        nullable: false,
        length: 24,
        name: 'OBJECT_TYPE',
        })
    public OBJECT_TYPE: string;

}
