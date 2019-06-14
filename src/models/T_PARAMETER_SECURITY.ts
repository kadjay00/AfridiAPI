import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PARAMETER_SECURITY', {schema: 'dbo' } )
export class T_PARAMETER_SECURITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'PAS_KEY_C',
        })
    public PAS_KEY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'PAS_TYPE_C',
        })
    public PAS_TYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'PAS_TEXT1_C',
        })
    public PAS_TEXT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'PAS_TEXT2_C',
        })
    public PAS_TEXT2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'PAS_TEXT3_C',
        })
    public PAS_TEXT3_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PAS_VALUE1_N',
        })
    public PAS_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAS_VALUE2_N',
        })
    public PAS_VALUE2_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'PAS_VALUE3_D',
        })
    public PAS_VALUE3_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'PAS_VALUE4_D',
        })
    public PAS_VALUE4_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAS_DATE1_DAT',
        })
    public PAS_DATE1_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAS_DATE2_DAT',
        })
    public PAS_DATE2_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAS_DATE3_DAT',
        })
    public PAS_DATE3_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PAS_FLAG1_C',
        })
    public PAS_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAS_FLAG2_C',
        })
    public PAS_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAS_FLAG3_C',
        })
    public PAS_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAS_FLAG4_C',
        })
    public PAS_FLAG4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAS_FLAG5_C',
        })
    public PAS_FLAG5_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PAS_USERID_C',
        })
    public PAS_USERID_C: string | null;

}
