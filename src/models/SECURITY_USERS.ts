import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('SECURITY_USERS', {schema: 'dbo' } )
export class SECURITY_USERS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'NAME',
        })
    public NAME: string;

    @Column('varchar', {
        nullable: false,
        length: 32,
        name: 'DESCRIPTION',
        })
    public DESCRIPTION: string;

    @Column('int', {
        nullable: false,
        name: 'PRIORITY',
        })
    public PRIORITY: number;

    @Column('int', {
        nullable: true,
        name: 'USER_TYPE',
        })
    public USER_TYPE: number | null;

    @Column('char', {
        nullable: true,
        name: 'CODE_LANGUAGE',
        })
    public CODE_LANGUAGE: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'DOMAIN',
        })
    public DOMAIN: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'DBUSERID',
        })
    public DBUSERID: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'DBPASSWORD',
        })
    public DBPASSWORD: string | null;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 55,
        name: 'SID',
        })
    public SID: string;

    @Column('char', {
        nullable: true,
        name: 'MULTISTORE',
        })
    public MULTISTORE: string | null;

    @Column('char', {
        nullable: true,
        name: 'LOCAL',
        })
    public LOCAL: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'account_creation_user',
        })
    public account_creation_user: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'account_creation_date',
        })
    public account_creation_date: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'account_change_user',
        })
    public account_change_user: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'account_change_date',
        })
    public account_change_date: Date | null;

}
