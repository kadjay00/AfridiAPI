import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_CADASTER', {schema: 'dbo' } )
export class T_SPY_CADASTER {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SPYID',
        })
    public SPYID: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'SPYACTION',
        })
    public SPYACTION: string;

    @Column('datetime', {
        nullable: false,
        name: 'SPYDATE',
        })
    public SPYDATE: Date;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPYLOGIN',
        })
    public SPYLOGIN: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPYHOST',
        })
    public SPYHOST: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SPYORIGIN',
        })
    public SPYORIGIN: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'CAD_PLAN_ID_C',
        })
    public CAD_PLAN_ID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'CAD_ORDER_N_OLD',
        })
    public CAD_ORDER_N_OLD: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAD_ORDER_N_NEW',
        })
    public CAD_ORDER_N_NEW: number | null;

    @Column('int', {
        nullable: true,
        name: 'NUMBER',
        })
    public NUMBER: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAD_NUMETIK_N_OLD',
        })
    public CAD_NUMETIK_N_OLD: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAD_NUMETIK_N_NEW',
        })
    public CAD_NUMETIK_N_NEW: number | null;

}
