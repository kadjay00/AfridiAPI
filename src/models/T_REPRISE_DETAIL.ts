import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_DETAIL', {schema: 'dbo' } )
export class T_REPRISE_DETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RED_REPRISE_N',
        })
    public RED_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RED_RECORD_N',
        })
    public RED_RECORD_N: number;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RED_DATA_C',
        })
    public RED_DATA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RED_DATATYPE_C',
        })
    public RED_DATATYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'RED_TEXT1_C',
        })
    public RED_TEXT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'RED_TEXT2_C',
        })
    public RED_TEXT2_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RED_VALUE1_N',
        })
    public RED_VALUE1_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RED_VALUE2_N',
        })
    public RED_VALUE2_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RED_VALUE3_N',
        })
    public RED_VALUE3_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'RED_VALUE4_N',
        })
    public RED_VALUE4_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'RED_FLAG1_C',
        })
    public RED_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RED_FLAG2_C',
        })
    public RED_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RED_FLAG3_C',
        })
    public RED_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RED_FLAG4_C',
        })
    public RED_FLAG4_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RED_DATETIME1_DAT',
        })
    public RED_DATETIME1_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RED_DATETIME2_DAT',
        })
    public RED_DATETIME2_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RED_DATETIME3_DAT',
        })
    public RED_DATETIME3_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RED_DATETIME4_DAT',
        })
    public RED_DATETIME4_DAT: Date | null;

}
