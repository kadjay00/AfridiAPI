import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POP_UP_MESSAGES', {schema: 'dbo' } )
export class T_POP_UP_MESSAGES {

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

    @Column('nvarchar', {
        nullable: false,
        length: 64,
        name: 'CreaWorkstation',
        })
    public CreaWorkstation: string;

    @Column('nvarchar', {
        nullable: false,
        length: 64,
        name: 'CreaUser',
        })
    public CreaUser: string;

    @Column('datetime', {
        nullable: false,
        name: 'CreaDateTime',
        })
    public CreaDateTime: Date;

    @Column('nvarchar', {
        nullable: false,
        length: 4000,
        name: 'TextFrench',
        })
    public TextFrench: string;

    @Column('nvarchar', {
        nullable: false,
        length: 4000,
        name: 'TextDutch',
        })
    public TextDutch: string;

    @Column('datetime', {
        nullable: false,
        name: 'PopupDateTime',
        })
    public PopupDateTime: Date;

    @Column('datetime', {
        nullable: false,
        name: 'ExpiredDateTime',
        })
    public ExpiredDateTime: Date;

    @Column('bit', {
        nullable: false,
        name: 'Sent',
        })
    public Sent: boolean;

    @Column('nvarchar', {
        nullable: true,
        length: 64,
        name: 'SentWorkstation',
        })
    public SentWorkstation: string | null;

    @Column('nvarchar', {
        nullable: true,
        length: 64,
        name: 'SentUser',
        })
    public SentUser: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SentDateTime',
        })
    public SentDateTime: Date | null;

    @Column('bit', {
        nullable: false,
        name: 'Deleted',
        })
    public Deleted: boolean;

    @Column('nvarchar', {
        nullable: true,
        length: 64,
        name: 'DeletedWorkstation',
        })
    public DeletedWorkstation: string | null;

    @Column('nvarchar', {
        nullable: true,
        length: 64,
        name: 'DeletedUser',
        })
    public DeletedUser: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'DeletedDateTime',
        })
    public DeletedDateTime: Date | null;

    @Column('bit', {
        nullable: false,
        name: 'ReSent',
        })
    public ReSent: boolean;

    @Column('nvarchar', {
        nullable: true,
        length: 64,
        name: 'ReSentWorkstation',
        })
    public ReSentWorkstation: string | null;

    @Column('nvarchar', {
        nullable: true,
        length: 64,
        name: 'ReSentUser',
        })
    public ReSentUser: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ReSentDateTime',
        })
    public ReSentDateTime: Date | null;

}
