import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY', {schema: 'dbo' } )
export class T_SPY {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SPY_IDENTITY_N',
        })
    public SPY_IDENTITY_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_STARTDATE_DAT',
        })
    public SPY_STARTDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'SPY_ACTION_C',
        })
    public SPY_ACTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPY_SHEET_C',
        })
    public SPY_SHEET_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPY_USERID_C',
        })
    public SPY_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPY_GROUP_C',
        })
    public SPY_GROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'SPY_APPLICATION_C',
        })
    public SPY_APPLICATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'SPY_WORKSTATION_C',
        })
    public SPY_WORKSTATION_C: string | null;

}
