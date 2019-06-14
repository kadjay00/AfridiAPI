import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOURS_PDT_LINES', {schema: 'dbo' } )
export class T_RETOURS_PDT_LINES {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RPL_REPRISE_N',
        })
    public RPL_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RPL_RECORD_N',
        })
    public RPL_RECORD_N: number;

    @Column('char', {
        nullable: true,
        name: 'RPL_MVTTYPE_C',
        })
    public RPL_MVTTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'RPL_PALETTE_C',
        })
    public RPL_PALETTE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RPL_ARTICLE_C',
        })
    public RPL_ARTICLE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'RPL_SHIPPINGUNIT_D',
        })
    public RPL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RPL_COLLIS_D',
        })
    public RPL_COLLIS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RPL_COLLISACCEPTED_D',
        })
    public RPL_COLLISACCEPTED_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'RPL_SELLINGUNITCODE_C',
        })
    public RPL_SELLINGUNITCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RPL_STATUS_C',
        })
    public RPL_STATUS_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RPL_DEPARTMENT_N',
        })
    public RPL_DEPARTMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RPL_SUBDEPARTMENT_N',
        })
    public RPL_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'RPL_GIBREF_C',
        })
    public RPL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RPL_IDNUMBER_C',
        })
    public RPL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RPL_ITEMDESCRIPNED_C',
        })
    public RPL_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RPL_ITEMDESCRIPFR_C',
        })
    public RPL_ITEMDESCRIPFR_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RPL_COSTPRICE_D',
        })
    public RPL_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RPL_NEGOCIATEPRICE_D',
        })
    public RPL_NEGOCIATEPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'RPL_ERRORCODE_C',
        })
    public RPL_ERRORCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RPL_USERID_C',
        })
    public RPL_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RPL_CREATIONDATE_DAT',
        })
    public RPL_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RPL_UPDATEDATE_DAT',
        })
    public RPL_UPDATEDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'RPL_ACTIVESELLINGPRICE_D',
        })
    public RPL_ACTIVESELLINGPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RPL_SUPPLIERID_C',
        })
    public RPL_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'RPL_SUPPLIERNAME_C',
        })
    public RPL_SUPPLIERNAME_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RPL_PACKAGE_N',
        })
    public RPL_PACKAGE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RPL_STATUSLOCK_N',
        })
    public RPL_STATUSLOCK_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'RPL_FLAGTYPE_C',
        })
    public RPL_FLAGTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RPL_CODE128_C',
        })
    public RPL_CODE128_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 3,
        name: 'RPL_CODE128WEIGHT_D',
        })
    public RPL_CODE128WEIGHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RPL_SUPPLIERRETOUR_C',
        })
    public RPL_SUPPLIERRETOUR_C: string | null;

}
