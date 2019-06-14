import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PARAMETER', {schema: 'dbo' } )
@Index('IX_PARAMETER_PKINDEX', ['PAR_KEY_C', 'PAR_TYPE_C', 'PAR_DEPARTMENT_N', 'PAR_SUBDEPARTMENT_N', 'PAR_SALESGROUP_C', 'PAR_SALESFAMILY_C', 'PAR_SALESSUBFAMILY'], {unique: true})
export class T_PARAMETER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_KEY_C',
        })
    public PAR_KEY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'PAR_TYPE_C',
        })
    public PAR_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAR_DEPARTMENT_N',
        })
    public PAR_DEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAR_SUBDEPARTMENT_N',
        })
    public PAR_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_SALESGROUP_C',
        })
    public PAR_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_SALESFAMILY_C',
        })
    public PAR_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_SALESSUBFAMILY',
        })
    public PAR_SALESSUBFAMILY: string;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PAR_TEXT1_C',
        })
    public PAR_TEXT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'PAR_TEXT2_C',
        })
    public PAR_TEXT2_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PAR_VALUE1_N',
        })
    public PAR_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PAR_VALUE2_N',
        })
    public PAR_VALUE2_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'PAR_VALUE3_D',
        })
    public PAR_VALUE3_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'PAR_VALUE4_D',
        })
    public PAR_VALUE4_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAR_DATE1_DAT',
        })
    public PAR_DATE1_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAR_DATE2_DAT',
        })
    public PAR_DATE2_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAR_DATE3_DAT',
        })
    public PAR_DATE3_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PAR_FLAG1_C',
        })
    public PAR_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAR_FLAG2_C',
        })
    public PAR_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAR_FLAG3_C',
        })
    public PAR_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAR_FLAG4_C',
        })
    public PAR_FLAG4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PAR_FLAG5_C',
        })
    public PAR_FLAG5_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PAR_USERID_C',
        })
    public PAR_USERID_C: string | null;

}
