import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STORUHD', {schema: 'dbo' } )
export class T_STORUHD {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'HDH_ID_N',
        })
    public HDH_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'HDH_START_DAT',
        })
    public HDH_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'HDH_END_DAT',
        })
    public HDH_END_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'HDH_LAST_DAT',
        })
    public HDH_LAST_DAT: Date | null;

    @Column('smallint', {
        nullable: true,
        name: 'HDH_USERS_N',
        })
    public HDH_USERS_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'HDH_TOCHECK_N',
        })
    public HDH_TOCHECK_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'HDH_TOCREATE_N',
        })
    public HDH_TOCREATE_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'HDH_RC_N',
        })
    public HDH_RC_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 500,
        name: 'HDH_MSG_C',
        })
    public HDH_MSG_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'HDH_OPTIONS_C',
        })
    public HDH_OPTIONS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'HDH_COMPUTER_C',
        })
    public HDH_COMPUTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'HDH_ACCOUNT_C',
        })
    public HDH_ACCOUNT_C: string | null;

}
