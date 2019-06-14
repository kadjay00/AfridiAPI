import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_HISTORY', {schema: 'dbo' } )
export class T_SPY_HISTORY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SPH_YEAR_N',
        })
    public SPH_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SPH_WEEKOFYEAR_N',
        })
    public SPH_WEEKOFYEAR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SPH_GROUP_C',
        })
    public SPH_GROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 35,
        name: 'SPH_SHEET_C',
        })
    public SPH_SHEET_C: string;

    @Column('int', {
        nullable: true,
        name: 'SPH_COUNT_N',
        })
    public SPH_COUNT_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPH_FIRSTUSE_DAT',
        })
    public SPH_FIRSTUSE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPH_LASTUSE_DAT',
        })
    public SPH_LASTUSE_DAT: Date | null;

}
