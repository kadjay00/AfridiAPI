import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDT_ORDERLINE', {schema: 'dbo' } )
export class T_PDT_ORDERLINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PDL_PDTORDERID_N',
        })
    public PDL_PDTORDERID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PDL_PDTRECORD_N',
        })
    public PDL_PDTRECORD_N: number;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'PDL_STOREID_C',
        })
    public PDL_STOREID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_YEAR_N',
        })
    public PDL_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDL_ORDERID_N',
        })
    public PDL_ORDERID_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'PDL_RECORD_N',
        })
    public PDL_RECORD_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDL_IDNUMBER_C',
        })
    public PDL_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'PDL_SUPPLIERID_C',
        })
    public PDL_SUPPLIERID_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'PDL_COLLIS_D',
        })
    public PDL_COLLIS_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDL_COR_DAT',
        })
    public PDL_COR_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PDL_CORUSER_C',
        })
    public PDL_CORUSER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'PDL_TAXPERCENTAGE_D',
        })
    public PDL_TAXPERCENTAGE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PDL_CURRENCY_C',
        })
    public PDL_CURRENCY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PDL_BASISBON_C',
        })
    public PDL_BASISBON_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_STATUS_C',
        })
    public PDL_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDL_CHANGE_ALLOWED_C',
        })
    public PDL_CHANGE_ALLOWED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 14,
        name: 'PDL_PDTREFERENCE_C',
        })
    public PDL_PDTREFERENCE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDL_IDNUMBERORIG_C',
        })
    public PDL_IDNUMBERORIG_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'PDL_QTYORIG_D',
        })
    public PDL_QTYORIG_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'PDL_ORDERLINESOURCE_C',
        })
    public PDL_ORDERLINESOURCE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PDL_COMMENT_C',
        })
    public PDL_COMMENT_C: string | null;

}
