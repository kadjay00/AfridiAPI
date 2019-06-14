import {Column, Entity, Index} from 'typeorm';

@Entity('MESSAGE_TEXT', {schema: 'dbo' } )
@Index('MESSAGES_TEXT_X', ['MSGID', 'MSGLANGUAGE'], {unique: true})
export class MESSAGE_TEXT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'MSGID',
        })
    public MSGID: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'MSGLANGUAGE',
        })
    public MSGLANGUAGE: string;

    @Column('varchar', {
        nullable: false,
        name: 'MSGTITLE',
        })
    public MSGTITLE: string;

    @Column('varchar', {
        nullable: false,
        name: 'MSGTEXT',
        })
    public MSGTEXT: string;

}
