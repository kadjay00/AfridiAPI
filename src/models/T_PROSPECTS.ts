import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROSPECTS', {schema: 'dbo' } )
export class T_PROSPECTS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_YEAR_N',
        })
    public PRO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_WEEK_N',
        })
    public PRO_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PRO_GROUP_C',
        })
    public PRO_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_ACTIVITY_N',
        })
    public PRO_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_SUBDEPARTMENT_N',
        })
    public PRO_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_PROSPECTS_D',
        })
    public PRO_PROSPECTS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_LOSSPERC_D',
        })
    public PRO_LOSSPERC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY1_D',
        })
    public PRO_DAY1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY2_D',
        })
    public PRO_DAY2_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY3_D',
        })
    public PRO_DAY3_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY4_D',
        })
    public PRO_DAY4_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY5_D',
        })
    public PRO_DAY5_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY6_D',
        })
    public PRO_DAY6_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRO_DAY7_D',
        })
    public PRO_DAY7_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 19,
        scale: 2,
        name: 'PRO_TOTALSALESPV_D',
        })
    public PRO_TOTALSALESPV_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PRO_USERIDCA_C',
        })
    public PRO_USERIDCA_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_DATECA_DAT',
        })
    public PRO_DATECA_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PRO_USERIDPERC_C',
        })
    public PRO_USERIDPERC_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_DATEPERC_DAT',
        })
    public PRO_DATEPERC_DAT: Date | null;

}
