import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('MESSAGES', {schema: 'dbo' } )
@Index('MESSAGES_X', ['MSGID'], {unique: true})
export class MESSAGES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'MSGID',
        })
    public MSGID: string;

    @Column('varchar', {
        nullable: false,
        length: 12,
        name: 'MSGICON',
        })
    public MSGICON: string;

    @Column('varchar', {
        nullable: false,
        length: 17,
        name: 'MSGBUTTON',
        })
    public MSGBUTTON: string;

    @Column('int', {
        nullable: false,
        name: 'MSGDEFAULTBUTTON',
        })
    public MSGDEFAULTBUTTON: number;

    @Column('int', {
        nullable: false,
        name: 'MSGSEVERITY',
        })
    public MSGSEVERITY: number;

    @Column('char', {
        nullable: false,
        name: 'MSGPRINT',
        })
    public MSGPRINT: string;

    @Column('char', {
        nullable: false,
        name: 'MSGUSERINPUT',
        })
    public MSGUSERINPUT: string;

    @Column('char', {
        nullable: true,
        length: 15,
        name: 'MSGAPPL',
        })
    public MSGAPPL: string | null;

    @Column('char', {
        nullable: true,
        length: 15,
        name: 'MSGVERSION',
        })
    public MSGVERSION: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MSGMODDATE',
        })
    public MSGMODDATE: Date | null;

}
