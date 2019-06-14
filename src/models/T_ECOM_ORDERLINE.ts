import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_ORDERLINE', {schema: 'dbo' } )
export class T_ECOM_ORDERLINE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORL_ORDERID_N',
        })
    public ORL_ORDERID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'ORL_RECORD_N',
        })
    public ORL_RECORD_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'ORL_IDNUMBER_C',
        })
    public ORL_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_ECOM_SALESPRICE_D',
        })
    public ORL_ECOM_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_SALESPRICE_D',
        })
    public ORL_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'ORL_COSTPRICE_D',
        })
    public ORL_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 3,
        name: 'ORL_QUANTITY_D',
        })
    public ORL_QUANTITY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 3,
        name: 'ORL_QUANTITY_PREP_D',
        })
    public ORL_QUANTITY_PREP_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_STATUS_C',
        })
    public ORL_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ORL_STATUSDATE_DAT',
        })
    public ORL_STATUSDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'ORL_EANUSED_C',
        })
    public ORL_EANUSED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'ORL_WEIGHT_D',
        })
    public ORL_WEIGHT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ORL_CTRLRUPT_C',
        })
    public ORL_CTRLRUPT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'ORL_ECOM_EMPTYUNITPRICE_D',
        })
    public ORL_ECOM_EMPTYUNITPRICE_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'ORL_SUBSTITUTION_N',
        })
    public ORL_SUBSTITUTION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ORL_DESCRIPTIONFR_C',
        })
    public ORL_DESCRIPTIONFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ORL_DESCRIPTIONNL_C',
        })
    public ORL_DESCRIPTIONNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'ORL_DESCRIPTIONLONGFR_C',
        })
    public ORL_DESCRIPTIONLONGFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'ORL_DESCRIPTIONLONGNL_C',
        })
    public ORL_DESCRIPTIONLONGNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ORL_TAXCODE_C',
        })
    public ORL_TAXCODE_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'ORL_EANPROMO_N',
        })
    public ORL_EANPROMO_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'ORL_PIECES_N',
        })
    public ORL_PIECES_N: number | null;

}
