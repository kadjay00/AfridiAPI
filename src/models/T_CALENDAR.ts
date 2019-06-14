import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CALENDAR', {schema: 'dbo' } )
@Index('CAL_YYYYWW_DUP_IDX', ['CAL_CALENDARTYPE_C', 'CAL_YEAR_N', 'CAL_WEEKOFYEAR_N'])
export class T_CALENDAR {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'CAL_DATE_DAT',
        })
    public CAL_DATE_DAT: Date;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CAL_CALENDARTYPE_C',
        })
    public CAL_CALENDARTYPE_C: string;

    @Column('char', {
        nullable: false,
        name: 'CAL_HOLIDAY_C',
        })
    public CAL_HOLIDAY_C: string;

    @Column('int', {
        nullable: false,
        name: 'CAL_DAYOFWEEK_N',
        })
    public CAL_DAYOFWEEK_N: number;

    @Column('int', {
        nullable: false,
        name: 'CAL_DAYOFYEAR_N',
        })
    public CAL_DAYOFYEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'CAL_WEEKOFYEAR_N',
        })
    public CAL_WEEKOFYEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'CAL_YEAR_N',
        })
    public CAL_YEAR_N: number;

    @Column('int', {
        nullable: true,
        name: 'CAL_PERIODE1_N',
        })
    public CAL_PERIODE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_PERIODE2_N',
        })
    public CAL_PERIODE2_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_PERIODE3_N',
        })
    public CAL_PERIODE3_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CAL_FLAG1_C',
        })
    public CAL_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CAL_FLAG2_C',
        })
    public CAL_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CAL_FLAG3_C',
        })
    public CAL_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CAL_FLAG4_C',
        })
    public CAL_FLAG4_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_DAYSTATUS_N',
        })
    public CAL_DAYSTATUS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_RECEPTIONSTATUS_N',
        })
    public CAL_RECEPTIONSTATUS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_ORDERSTATUS_N',
        })
    public CAL_ORDERSTATUS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_POSCLOSESTATUS_N',
        })
    public CAL_POSCLOSESTATUS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAL_COMMENT_C',
        })
    public CAL_COMMENT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'CAL_NORMALIZESTATUS_N',
        })
    public CAL_NORMALIZESTATUS_N: number | null;

}
