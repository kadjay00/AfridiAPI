import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECAST', {schema: 'dbo' } )
export class T_FORECAST {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FOR_YEAR_N',
        })
    public FOR_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FOR_WEEKOFYEAR_N',
        })
    public FOR_WEEKOFYEAR_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'FOR_WEEKDATE_DAT',
        })
    public FOR_WEEKDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        name: 'FOR_COMMENT_C',
        })
    public FOR_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 140,
        name: 'FOR_BASEWEEKS_C',
        })
    public FOR_BASEWEEKS_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'FOR_COMPDATE_DAT',
        })
    public FOR_COMPDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'FOR_POSACTIVITY_C',
        })
    public FOR_POSACTIVITY_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'FOR_POSTIMESLICE_DAT',
        })
    public FOR_POSTIMESLICE_DAT: Date | null;

    @Column('int', {
        nullable: false,
        name: 'FOR_COMPARED_N',
        })
    public FOR_COMPARED_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'FOR_EXPORT_DAT',
        })
    public FOR_EXPORT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOR_HORBES_DAT',
        })
    public FOR_HORBES_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOR_HISTO_DAT',
        })
    public FOR_HISTO_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FOR_CONFIGCALENDAR_C',
        })
    public FOR_CONFIGCALENDAR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FOR_CONFIGPREVISIONS_C',
        })
    public FOR_CONFIGPREVISIONS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOR_PARAM_DAT',
        })
    public FOR_PARAM_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'FOR_USERID_C',
        })
    public FOR_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'FOR_TERMGRNUMBERFE_C',
        })
    public FOR_TERMGRNUMBERFE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOR_COMPDATEBATCH_DAT',
        })
    public FOR_COMPDATEBATCH_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'FOR_TERMGRNUMBEREXCL_C',
        })
    public FOR_TERMGRNUMBEREXCL_C: string | null;

}
