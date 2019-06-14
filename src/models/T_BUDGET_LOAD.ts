import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BUDGET_LOAD', {schema: 'dbo' } )
export class T_BUDGET_LOAD {

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

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'BLO_TRANSMISSIONUSER_C',
        })
    public BLO_TRANSMISSIONUSER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'BLO_TRANSMISSIONSTART_DAT',
        })
    public BLO_TRANSMISSIONSTART_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'BLO_TRANSMISSIONSTOP_DAT',
        })
    public BLO_TRANSMISSIONSTOP_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'BLO_PROCESSSTART_DAT',
        })
    public BLO_PROCESSSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'BLO_PROCESSSTOP_DAT',
        })
    public BLO_PROCESSSTOP_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'BLO_PROCESSFLAG_C',
        })
    public BLO_PROCESSFLAG_C: string | null;

}
