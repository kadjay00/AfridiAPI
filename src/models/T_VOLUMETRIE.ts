import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_VOLUMETRIE', {schema: 'dbo' } )
export class T_VOLUMETRIE {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'VOL_ID_N',
        })
    public VOL_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'VOL_REPORT_C',
        })
    public VOL_REPORT_C: string;

    @Column('int', {
        nullable: false,
        name: 'VOL_TYPE_N',
        })
    public VOL_TYPE_N: number;

    @Column('int', {
        nullable: true,
        name: 'VOL_SUBDEP_N',
        })
    public VOL_SUBDEP_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'VOL_IDNUMBER_C',
        })
    public VOL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOL_DESCRIP1FRA_C',
        })
    public VOL_DESCRIP1FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOL_DESCRIP1NED_C',
        })
    public VOL_DESCRIP1NED_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'VOL_MAINFACTORID_C',
        })
    public VOL_MAINFACTORID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'VOL_SECONDARYID_C',
        })
    public VOL_SECONDARYID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOL_SECONDARYDESCRIPFRA_C',
        })
    public VOL_SECONDARYDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'VOL_SECONDARYDESCRIPNED_C',
        })
    public VOL_SECONDARYDESCRIPNED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 2,
        name: 'VOL_VALUE1_D',
        })
    public VOL_VALUE1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 2,
        name: 'VOL_VALUE2_D',
        })
    public VOL_VALUE2_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 2,
        name: 'VOL_VALUE3_D',
        })
    public VOL_VALUE3_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'VOL_UNIT1_C',
        })
    public VOL_UNIT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'VOL_UNIT2_C',
        })
    public VOL_UNIT2_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'VOL_ACTIVE_C',
        })
    public VOL_ACTIVE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'VOL_CREATION_DAT',
        })
    public VOL_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'VOL_CREATIONUSER_C',
        })
    public VOL_CREATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'VOL_UPDATE_DAT',
        })
    public VOL_UPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'VOL_UPDATEUSER_C',
        })
    public VOL_UPDATEUSER_C: string | null;

}
