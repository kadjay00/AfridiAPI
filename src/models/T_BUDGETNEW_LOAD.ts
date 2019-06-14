import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BUDGETNEW_LOAD', {schema: 'dbo' } )
export class T_BUDGETNEW_LOAD {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'BLO_ID_N',
        })
    public BLO_ID_N: number;

    @Column('int', {
        nullable: false,
        name: 'BLO_YEAR_N',
        })
    public BLO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'BLO_SESSION_N',
        })
    public BLO_SESSION_N: number;

    @Column('char', {
        nullable: false,
        name: 'BLO_PROCESSFLAG_C',
        })
    public BLO_PROCESSFLAG_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'BLO_PROCESSDATE_DAT',
        })
    public BLO_PROCESSDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        name: 'BLO_TRNSLASTSESSION_N',
        })
    public BLO_TRNSLASTSESSION_N: number;

    @Column('int', {
        nullable: false,
        name: 'BLO_TRNSLASTSESSIONCONS_N',
        })
    public BLO_TRNSLASTSESSIONCONS_N: number;

}
