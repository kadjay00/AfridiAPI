import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PLANOGRAM_ITEMS', {schema: 'dbo' } )
@Index('IX_PLI_DEPGIBREF', ['PLI_DEPARTMENT_N', 'PLI_GIBREF_C'])
export class T_PLANOGRAM_ITEMS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'PLI_PLAN_ID_C',
        })
    public PLI_PLAN_ID_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PLI_CODE_C',
        })
    public PLI_CODE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PLI_DEPARTMENT_N',
        })
    public PLI_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 7,
        name: 'PLI_GIBREF_C',
        })
    public PLI_GIBREF_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PLI_LOCALITEM_C',
        })
    public PLI_LOCALITEM_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PLI_LOCATION_N',
        })
    public PLI_LOCATION_N: number;

    @Column('int', {
        nullable: true,
        name: 'PLI_HOR_FAC_N',
        })
    public PLI_HOR_FAC_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_VER_FAC_N',
        })
    public PLI_VER_FAC_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_CAPACITY_N',
        })
    public PLI_CAPACITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_HEIGHT_N',
        })
    public PLI_HEIGHT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_WIDTH_N',
        })
    public PLI_WIDTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_DEPTH_N',
        })
    public PLI_DEPTH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_FIRST_SEG_N',
        })
    public PLI_FIRST_SEG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_LAST_SEG_N',
        })
    public PLI_LAST_SEG_N: number | null;

    @Column('char', {
        nullable: false,
        name: 'PLI_ADDED_C',
        })
    public PLI_ADDED_C: string;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PLI_USER_C',
        })
    public PLI_USER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PLI_FLAG1_C',
        })
    public PLI_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PLI_FLAG2_C',
        })
    public PLI_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PLI_FLAG3_C',
        })
    public PLI_FLAG3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PLI_IDCOMMANDE_C',
        })
    public PLI_IDCOMMANDE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PLI_DEP_COMM_N',
        })
    public PLI_DEP_COMM_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PLI_GIBREF_COMM_C',
        })
    public PLI_GIBREF_COMM_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PLI_PROF_FAC_N',
        })
    public PLI_PROF_FAC_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PLI_HFACINGGEST_N',
        })
    public PLI_HFACINGGEST_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PLI_VFACINGGEST_N',
        })
    public PLI_VFACINGGEST_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PLI_DFACINGGEST_N',
        })
    public PLI_DFACINGGEST_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PLI_PAV_c',
        })
    public PLI_PAV_c: string | null;

    @Column('char', {
        nullable: true,
        length: 2,
        name: 'PLI_PAVSAP_C',
        })
    public PLI_PAVSAP_C: string | null;

}
