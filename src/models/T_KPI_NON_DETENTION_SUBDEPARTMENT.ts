import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_NON_DETENTION_SUBDEPARTMENT', {schema: 'dbo' } )
export class T_KPI_NON_DETENTION_SUBDEPARTMENT {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'NDS_YEAR_N',
        })
    public NDS_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'NDS_MONTH_N',
        })
    public NDS_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'NDS_SUBDEPARTMENT_N',
        })
    public NDS_SUBDEPARTMENT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'NDS_START_DAT',
        })
    public NDS_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'NDS_END_DAT',
        })
    public NDS_END_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'NDS_PRG_N',
        })
    public NDS_PRG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NDS_PND_N',
        })
    public NDS_PND_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NDS_IRG_N',
        })
    public NDS_IRG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'NDS_IND_N',
        })
    public NDS_IND_N: number | null;

}
