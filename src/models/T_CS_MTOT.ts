import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_MTOT', {schema: 'dbo' } )
export class T_CS_MTOT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CMT_REPORTID_N',
        })
    public CMT_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMT_YEAR_N',
        })
    public CMT_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMT_WEEK_N',
        })
    public CMT_WEEK_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMT_DEPARTMENT_N',
        })
    public CMT_DEPARTMENT_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMT_ACTIVITY_N',
        })
    public CMT_ACTIVITY_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMT_DEPOT_N',
        })
    public CMT_DEPOT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'CMT_DATEFROM_DAT',
        })
    public CMT_DATEFROM_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CMT_DATETO_DAT',
        })
    public CMT_DATETO_DAT: Date | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CMT_FCVV_C',
        })
    public CMT_FCVV_C: string;

}
