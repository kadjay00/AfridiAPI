import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDCQLINE_HISTO', {schema: 'dbo' } )
export class T_PDCQLINE_HISTO {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'PQL_PDCNUMBER_N',
        })
    public PQL_PDCNUMBER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PQL_IDNUMBER_C',
        })
    public PQL_IDNUMBER_C: string;

    @Column('char', {
        nullable: true,
        name: 'PQL_PERIODEFOODNONFOOD_C',
        })
    public PQL_PERIODEFOODNONFOOD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PQL_PERIODENBR_C',
        })
    public PQL_PERIODENBR_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_WAVEYEAR_N',
        })
    public PQL_WAVEYEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_WAVENBR_N',
        })
    public PQL_WAVENBR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_SORTORDER_N',
        })
    public PQL_SORTORDER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PQL_GROUP_C',
        })
    public PQL_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_ACTIVITY_N',
        })
    public PQL_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_SUBDEPARTMENT_N',
        })
    public PQL_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PQL_SALESGROUP_C',
        })
    public PQL_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PQL_SALESFAMILY_C',
        })
    public PQL_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PQL_SALESSUBFAMILY_C',
        })
    public PQL_SALESSUBFAMILY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_DEPARTMENT_N',
        })
    public PQL_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PQL_GIBREF_C',
        })
    public PQL_GIBREF_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PQL_EANCODE_N',
        })
    public PQL_EANCODE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PQL_REALSALE_D',
        })
    public PQL_REALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_INITQTYDELIVERED_D',
        })
    public PQL_INITQTYDELIVERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_QTYDELIVERED_D',
        })
    public PQL_QTYDELIVERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_STOCKAVAILABLE_D',
        })
    public PQL_STOCKAVAILABLE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_OPENORDERS_D',
        })
    public PQL_OPENORDERS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_QTYPROPOSED_D',
        })
    public PQL_QTYPROPOSED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_QTYORDERED_D',
        })
    public PQL_QTYORDERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_INITIALQTYORDERED_D',
        })
    public PQL_INITIALQTYORDERED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'PQL_SHIPPINGUNIT_D',
        })
    public PQL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PQL_ACTIVECOSTPRICE_D',
        })
    public PQL_ACTIVECOSTPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PQL_PQLMODIFIED_C',
        })
    public PQL_PQLMODIFIED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PQL_DELIVERYCODE_C',
        })
    public PQL_DELIVERYCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_QTYANNOUNCED_D',
        })
    public PQL_QTYANNOUNCED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_ACTUALORDEREDQTY_D',
        })
    public PQL_ACTUALORDEREDQTY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQL_DELTAQTYQUANTIFIED_D',
        })
    public PQL_DELTAQTYQUANTIFIED_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PQL_AUTOPRINT_C',
        })
    public PQL_AUTOPRINT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PQL_ACTIONCOM_C',
        })
    public PQL_ACTIONCOM_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_FOLDERWEEK_N',
        })
    public PQL_FOLDERWEEK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PQL_FOLDERYEAR_N',
        })
    public PQL_FOLDERYEAR_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PQL_ACTIONTYPE_C',
        })
    public PQL_ACTIONTYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PQL_MODIFIED_DAT',
        })
    public PQL_MODIFIED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PQL_USERID_C',
        })
    public PQL_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PQL_QUANTIFTYPE_C',
        })
    public PQL_QUANTIFTYPE_C: string | null;

}
