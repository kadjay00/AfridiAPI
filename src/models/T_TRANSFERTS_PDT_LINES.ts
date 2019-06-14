import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRANSFERTS_PDT_LINES', {schema: 'dbo' } )
export class T_TRANSFERTS_PDT_LINES {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TPL_REPRISE_N',
        })
    public TPL_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TPL_RECORD_N',
        })
    public TPL_RECORD_N: number;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'TPL_ARTICLE_C',
        })
    public TPL_ARTICLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TPL_FLAGTYPE_C',
        })
    public TPL_FLAGTYPE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'TPL_PVUNIT_D',
        })
    public TPL_PVUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'TPL_PVUSER_D',
        })
    public TPL_PVUSER_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'TPL_PRUNIT_D',
        })
    public TPL_PRUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'TPL_PRUSER_D',
        })
    public TPL_PRUSER_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'TPL_QTYUSER_D',
        })
    public TPL_QTYUSER_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'TPL_QTYSTOCK_D',
        })
    public TPL_QTYSTOCK_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TPL_IDNUMBER_C',
        })
    public TPL_IDNUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'TPL_PACKAGE_N',
        })
    public TPL_PACKAGE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'TPL_STATUSLOCK_N',
        })
    public TPL_STATUSLOCK_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TPL_USERID_C',
        })
    public TPL_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TPL_MODIFY_DAT',
        })
    public TPL_MODIFY_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'TPL_ERRORID_C',
        })
    public TPL_ERRORID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'TPL_ERRORPARAM_C',
        })
    public TPL_ERRORPARAM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TPL_CORRECTED_C',
        })
    public TPL_CORRECTED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TPL_CORRDATE_DAT',
        })
    public TPL_CORRDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TPL_CORRUSER_C',
        })
    public TPL_CORRUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'TPL_IMPORTERRORMSG_C',
        })
    public TPL_IMPORTERRORMSG_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TPL_TAXCODE_C',
        })
    public TPL_TAXCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TPL_STATUS_C',
        })
    public TPL_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TPL_CODE128_C',
        })
    public TPL_CODE128_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 3,
        name: 'TPL_CODE128WEIGHT_D',
        })
    public TPL_CODE128WEIGHT_D: number | null;

}
