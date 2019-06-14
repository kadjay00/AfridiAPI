import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOREXCEPTIONAL', {schema: 'dbo' } )
export class T_FOREXCEPTIONAL {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'FEL_FORYEAR_N',
        })
    public FEL_FORYEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'FEL_FORWEEK_N',
        })
    public FEL_FORWEEK_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'FEL_SLICEID_N',
        })
    public FEL_SLICEID_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY1_D',
        })
    public FEL_DAY1_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY2_D',
        })
    public FEL_DAY2_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY3_D',
        })
    public FEL_DAY3_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY4_D',
        })
    public FEL_DAY4_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY5_D',
        })
    public FEL_DAY5_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY6_D',
        })
    public FEL_DAY6_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEL_DAY7_D',
        })
    public FEL_DAY7_D: number;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'FEL_FLAGDELETE_C',
        })
    public FEL_FLAGDELETE_C: string | null;

}
