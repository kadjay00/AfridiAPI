import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_MYCAD', {schema: 'dbo' } )
export class T_SPY_MYCAD {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:12,
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPY_CALL_C',
        })
    public SPY_CALL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SPY_USERID_C',
        })
    public SPY_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_START_DAT',
        })
    public SPY_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_END_DAT',
        })
    public SPY_END_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SPY_RC_N',
        })
    public SPY_RC_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'SPY_ARGS_C',
        })
    public SPY_ARGS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_LOGIN_C',
        })
    public SPY_LOGIN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_HOST_C',
        })
    public SPY_HOST_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SPY_APPNAME_C',
        })
    public SPY_APPNAME_C: string | null;

}
