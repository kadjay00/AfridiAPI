import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDERLINE', {schema: 'dbo' } )
export class T_ORDERLINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'ORL_ORDERID_N',
        })
    public ORL_ORDERID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORL_RECORD_N',
        })
    public ORL_RECORD_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'ORL_IDNUMBER_C',
        })
    public ORL_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'ORL_APPLICATION_N',
        })
    public ORL_APPLICATION_N: number | null;

    @Column('decimal', {
        nullable: false,
        precision: 8,
        scale: 2,
        name: 'ORL_QUANTITY_D',
        })
    public ORL_QUANTITY_D: number;

    @Column('char', {
        nullable: false,
        name: 'ORL_STATUS_C',
        })
    public ORL_STATUS_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 8,
        scale: 2,
        name: 'ORL_QUANTITYCOR_D',
        })
    public ORL_QUANTITYCOR_D: number;

    @Column('datetime', {
        nullable: true,
        name: 'ORL_COR_DAT',
        })
    public ORL_COR_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'ORL_CORUSER_C',
        })
    public ORL_CORUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'ORL_ARTICLE_C',
        })
    public ORL_ARTICLE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORL_DEPARTMENT_N',
        })
    public ORL_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ORL_GIBREF_C',
        })
    public ORL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORL_ITEMDESCRIPNED_C',
        })
    public ORL_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORL_ITEMDESCRIPFRA_C',
        })
    public ORL_ITEMDESCRIPFRA_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'ORL_SHIPPINGUNIT_D',
        })
    public ORL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_SELLINGPRICE_D',
        })
    public ORL_SELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_EXTAXPRICE_D',
        })
    public ORL_EXTAXPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'ORL_TAXPERCENTAGE_D',
        })
    public ORL_TAXPERCENTAGE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORL_COSTPRICE_D',
        })
    public ORL_COSTPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_ESTIMATEDCOSTPRICE_C',
        })
    public ORL_ESTIMATEDCOSTPRICE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'ORL_PROFITPERCENT_D',
        })
    public ORL_PROFITPERCENT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_LOCALSUPCODE_C',
        })
    public ORL_LOCALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_CENTRALSUPCODE_C',
        })
    public ORL_CENTRALSUPCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'ORL_SUSPQUANT_D',
        })
    public ORL_SUSPQUANT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_SUSPVALUE_D',
        })
    public ORL_SUSPVALUE_D: number | null;

    @Column('int', {
        nullable: false,
        name: 'ORL_WARNINGS_N',
        })
    public ORL_WARNINGS_N: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ORL_PRICECURRENCY_C',
        })
    public ORL_PRICECURRENCY_C: string | null;

}
