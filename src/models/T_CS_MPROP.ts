import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_MPROP', {schema: 'dbo' } )
export class T_CS_MPROP {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CMP_REPORTID_N',
        })
    public CMP_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMP_YEAR_N',
        })
    public CMP_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMP_WEEK_N',
        })
    public CMP_WEEK_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMP_DEPARTMENT_N',
        })
    public CMP_DEPARTMENT_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMP_ACTIVITY_N',
        })
    public CMP_ACTIVITY_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMP_DEPOT_N',
        })
    public CMP_DEPOT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'CMP_DATEFROM_DAT',
        })
    public CMP_DATEFROM_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CMP_DATETO_DAT',
        })
    public CMP_DATETO_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CMP_HEADERNORM_C',
        })
    public CMP_HEADERNORM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CMP_HEADERBARC_C',
        })
    public CMP_HEADERBARC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'CMP_HEADERNORMTOT_C',
        })
    public CMP_HEADERNORMTOT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'CMP_HEADERBARCTOT_C',
        })
    public CMP_HEADERBARCTOT_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CMP_FCVV_C',
        })
    public CMP_FCVV_C: string;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'CMP_FLAG1_C',
        })
    public CMP_FLAG1_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'CMP_DATEFLAG1_DAT',
        })
    public CMP_DATEFLAG1_DAT: Date | null;

}
