import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_NON_DETENTION', {schema: 'dbo' } )
export class T_KPI_NON_DETENTION {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'NDE_YEAR_N',
        })
    public NDE_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'NDE_MONTH_N',
        })
    public NDE_MONTH_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'NDE_START_DAT',
        })
    public NDE_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDE_END_DAT',
        })
    public NDE_END_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'NDE_PRG_N',
        })
    public NDE_PRG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NDE_PND_N',
        })
    public NDE_PND_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NDE_IRG_N',
        })
    public NDE_IRG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NDE_IND_N',
        })
    public NDE_IND_N: number | null;

}
