import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POP_UP_MESSAGES_SENT', {schema: 'dbo' } )
export class T_POP_UP_MESSAGES_SENT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'StoreNr',
        })
    public StoreNr: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SequenceNr',
        })
    public SequenceNr: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SentStoreNr',
        })
    public SentStoreNr: number;

    @Column('bit', {
        nullable: false,
        name: 'Sent',
        })
    public Sent: boolean;

    @Column('datetime', {
        nullable: true,
        name: 'SentDateTimeOk',
        })
    public SentDateTimeOk: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SentDateTimeFailed',
        })
    public SentDateTimeFailed: Date | null;

}
