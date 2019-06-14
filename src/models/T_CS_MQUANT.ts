import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_MQUANT', {schema: 'dbo' } )
export class T_CS_MQUANT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CMQ_REPORTID_N',
        })
    public CMQ_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMQ_YEAR_N',
        })
    public CMQ_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMQ_WEEK_N',
        })
    public CMQ_WEEK_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMQ_DEPARTMENT_N',
        })
    public CMQ_DEPARTMENT_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMQ_ACTIVITY_N',
        })
    public CMQ_ACTIVITY_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMQ_DEPOT_N',
        })
    public CMQ_DEPOT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'CMQ_DATEFROM_DAT',
        })
    public CMQ_DATEFROM_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CMQ_DATETO_DAT',
        })
    public CMQ_DATETO_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CMQ_HEADERNORM_C',
        })
    public CMQ_HEADERNORM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CMQ_HEADERBARC_C',
        })
    public CMQ_HEADERBARC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'CMQ_HEADERNORMTOT_C',
        })
    public CMQ_HEADERNORMTOT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'CMQ_HEADERBARCTOT_C',
        })
    public CMQ_HEADERBARCTOT_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CMQ_FCVV_C',
        })
    public CMQ_FCVV_C: string;

}
