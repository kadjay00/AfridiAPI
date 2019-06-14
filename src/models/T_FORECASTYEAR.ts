import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTYEAR', {schema: 'dbo' } )
@Index('IX_FORECASTYEAR_SUBDEPARTMENT', ['FYR_SUBDEPARTMENT_N'])
export class T_FORECASTYEAR {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'FYR_CALENDARTYPE_C',
        })
    public FYR_CALENDARTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FYR_YEAR_N',
        })
    public FYR_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FYR_WEEKOFYEAR_N',
        })
    public FYR_WEEKOFYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FYR_SUBDEPARTMENT_N',
        })
    public FYR_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FYR_PV_LONG_D',
        })
    public FYR_PV_LONG_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FYR_GP_LONG_D',
        })
    public FYR_GP_LONG_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FYR_PV_SHORT_D',
        })
    public FYR_PV_SHORT_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FYR_GP_SHORT_D',
        })
    public FYR_GP_SHORT_D: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'FYR_PRICECURRENCY_C',
        })
    public FYR_PRICECURRENCY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FYR_FLAG1_C',
        })
    public FYR_FLAG1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FYR_FLAG2_C',
        })
    public FYR_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FYR_FLAG3_C',
        })
    public FYR_FLAG3_C: string | null;

}
