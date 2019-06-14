import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_PDCSTATE', {schema: 'dbo' } )
export class T_SPY_PDCSTATE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPY_IDNUMBER_C',
        })
    public SPY_IDNUMBER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_DATE_DAT',
        })
    public SPY_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SPY_ORIGSTATE_C',
        })
    public SPY_ORIGSTATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SPY_NEWSTATE_C',
        })
    public SPY_NEWSTATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPY_LOGIN_C',
        })
    public SPY_LOGIN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPY_HOST_C',
        })
    public SPY_HOST_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 75,
        name: 'SPY_ORIGIN_C',
        })
    public SPY_ORIGIN_C: string | null;

}
