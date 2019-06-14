import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_MWORK', {schema: 'dbo' } )
export class T_CS_MWORK {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CMW_REPORTID_N',
        })
    public CMW_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMW_YEAR_N',
        })
    public CMW_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMW_WEEK_N',
        })
    public CMW_WEEK_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'CMW_DATEFROM_DAT',
        })
    public CMW_DATEFROM_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CMW_DATETO_DAT',
        })
    public CMW_DATETO_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPMON_N',
        })
    public CMW_EXPMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPTUE_N',
        })
    public CMW_EXPTUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPWED_N',
        })
    public CMW_EXPWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPTHU_N',
        })
    public CMW_EXPTHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPFRI_N',
        })
    public CMW_EXPFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPSAT_N',
        })
    public CMW_EXPSAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPSALES_N',
        })
    public CMW_EXPSALES_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CMW_EXPDILUTE_N',
        })
    public CMW_EXPDILUTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'CMW_PERCFREEZER_N',
        })
    public CMW_PERCFREEZER_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'CMW_PERCDILUTE_N',
        })
    public CMW_PERCDILUTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'CMW_PERCMEAT_N',
        })
    public CMW_PERCMEAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'CMW_PERCPACKING_N',
        })
    public CMW_PERCPACKING_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'CMW_PERCROM_N',
        })
    public CMW_PERCROM_N: number | null;

}
