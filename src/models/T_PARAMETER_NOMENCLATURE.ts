import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PARAMETER_NOMENCLATURE', {schema: 'dbo' } )
export class T_PARAMETER_NOMENCLATURE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAN_KEY_C',
        })
    public PAN_KEY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'PAN_TYPE_C',
        })
    public PAN_TYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PAN_GROUP_C',
        })
    public PAN_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAN_ACTIVITY_N',
        })
    public PAN_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAN_SUBDEPARTMENT_N',
        })
    public PAN_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAN_SALESGROUP_C',
        })
    public PAN_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAN_SALESFAMILY_C',
        })
    public PAN_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAN_SALESSUBFAMILY_C',
        })
    public PAN_SALESSUBFAMILY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PAN_TEXT1_C',
        })
    public PAN_TEXT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PAN_TEXT2_C',
        })
    public PAN_TEXT2_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PAN_VALUE1_N',
        })
    public PAN_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAN_VALUE2_N',
        })
    public PAN_VALUE2_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'PAN_VALUE3_D',
        })
    public PAN_VALUE3_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'PAN_VALUE4_D',
        })
    public PAN_VALUE4_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAN_DATE1_DAT',
        })
    public PAN_DATE1_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAN_DATE2_DAT',
        })
    public PAN_DATE2_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAN_DATE3_DAT',
        })
    public PAN_DATE3_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PAN_FLAG1_C',
        })
    public PAN_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAN_FLAG2_C',
        })
    public PAN_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAN_FLAG3_C',
        })
    public PAN_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAN_FLAG4_C',
        })
    public PAN_FLAG4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAN_FLAG5_C',
        })
    public PAN_FLAG5_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PAN_USERID_C',
        })
    public PAN_USERID_C: string | null;

}
