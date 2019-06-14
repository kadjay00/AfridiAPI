import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_BATCH', {schema: 'dbo' } )
export class T_SPY_BATCH {

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

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPY_ACTION_C',
        })
    public SPY_ACTION_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SPY_PROCID_N',
        })
    public SPY_PROCID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPY_BATCHTYPE_C',
        })
    public SPY_BATCHTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'SPY_COMMANDLINE_C',
        })
    public SPY_COMMANDLINE_C: string | null;

}
