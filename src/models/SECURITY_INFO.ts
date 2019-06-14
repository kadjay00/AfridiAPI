import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_INFO', {schema: 'dbo' } )
@Index('IX_SECURITY_INFO_USER_NAME', ['USER_NAME'])
@Index('SECURITY_INFO_X', ['APPLICATION', 'WINDOW', 'CONTROL', 'USER_NAME'], {unique: true})
export class SECURITY_INFO {

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
        primary: true,
        length: 16,
        name: 'USER_NAME',
        })
    public USER_NAME: string;

    @Column('char', {
        nullable: false,
        name: 'STATUS',
        })
    public STATUS: string;

}
