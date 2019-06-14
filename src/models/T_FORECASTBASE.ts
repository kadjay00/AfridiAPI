import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTBASE', {schema: 'dbo' } )
export class T_FORECASTBASE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FOB_YEAR_N',
        })
    public FOB_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FOB_WEEKOFYEAR_N',
        })
    public FOB_WEEKOFYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FOB_BASEYEAR_N',
        })
    public FOB_BASEYEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FOB_BASEWEEKOFYEAR_N',
        })
    public FOB_BASEWEEKOFYEAR_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY1_DAT',
        })
    public FOB_DAY1_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY2_DAT',
        })
    public FOB_DAY2_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY3_DAT',
        })
    public FOB_DAY3_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY4_DAT',
        })
    public FOB_DAY4_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY5_DAT',
        })
    public FOB_DAY5_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY6_DAT',
        })
    public FOB_DAY6_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOB_DAY7_DAT',
        })
    public FOB_DAY7_DAT: Date | null;

}
