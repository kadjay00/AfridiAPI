import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_LINE_PDT', {schema: 'dbo' } )
export class T_RECEPTION_LINE_PDT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RLP_REPRISE_N',
        })
    public RLP_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RLP_RECORD_N',
        })
    public RLP_RECORD_N: number;

    @Column('char', {
        nullable: false,
        name: 'RLP_MVTTYPE_C',
        })
    public RLP_MVTTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 18,
        name: 'RLP_PALETTE_C',
        })
    public RLP_PALETTE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RLP_ARTICLE_C',
        })
    public RLP_ARTICLE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'RLP_SHIPPINGUNIT_D',
        })
    public RLP_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'RLP_COLLISCOUNTED_D',
        })
    public RLP_COLLISCOUNTED_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'RLP_SELLINGUNITCODE_C',
        })
    public RLP_SELLINGUNITCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RLP_STATUS_C',
        })
    public RLP_STATUS_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RLP_DEPARTMENT_N',
        })
    public RLP_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'RLP_GIBREF_C',
        })
    public RLP_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RLP_IDNUMBER_C',
        })
    public RLP_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RLP_ITEMDESCRIPNED_C',
        })
    public RLP_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RLP_ITEMDESCRIPFRA_C',
        })
    public RLP_ITEMDESCRIPFRA_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RLP_SUBDEPARTMENT_N',
        })
    public RLP_SUBDEPARTMENT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'RLP_ACTIVESELLINGPRICE_D',
        })
    public RLP_ACTIVESELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RLP_ACTIVECOSTPRICE_D',
        })
    public RLP_ACTIVECOSTPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'RLP_ERRORCODE_C',
        })
    public RLP_ERRORCODE_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'RLP_USERID_C',
        })
    public RLP_USERID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'RLP_CREATIONDATE_DAT',
        })
    public RLP_CREATIONDATE_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'RLP_UPDATEDATE_DAT',
        })
    public RLP_UPDATEDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'RLP_CURRENCY_C',
        })
    public RLP_CURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'RLP_TAXPERCENTAGE_D',
        })
    public RLP_TAXPERCENTAGE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'RLP_SUPPLIERID_C',
        })
    public RLP_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RLP_TYPE_C',
        })
    public RLP_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RLP_FOODNFOOD_C',
        })
    public RLP_FOODNFOOD_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RLP_STATUSLOCK_N',
        })
    public RLP_STATUSLOCK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RLP_DISPLAY_N',
        })
    public RLP_DISPLAY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'RLP_ARTTYPE_C',
        })
    public RLP_ARTTYPE_C: string | null;

}
