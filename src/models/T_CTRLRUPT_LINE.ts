import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CTRLRUPT_LINE', {schema: 'dbo' } )
export class T_CTRLRUPT_LINE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'LRU_RUPTURE_N',
        })
    public LRU_RUPTURE_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'LRU_LINENUMBER_N',
        })
    public LRU_LINENUMBER_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LRU_GROUP_C',
        })
    public LRU_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_ACTIVITY_N',
        })
    public LRU_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_SUBDEPARTMENT_N',
        })
    public LRU_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LRU_SALESGROUP_C',
        })
    public LRU_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LRU_SALESFAMILY_C',
        })
    public LRU_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LRU_IDNUMBER_C',
        })
    public LRU_IDNUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_DEPARTMENT_N',
        })
    public LRU_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'LRU_GIBREF_C',
        })
    public LRU_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LRU_IDCOMMANDE_C',
        })
    public LRU_IDCOMMANDE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LRU_IDGESTION_C',
        })
    public LRU_IDGESTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LRU_ITEMDESCRIPFRA_C',
        })
    public LRU_ITEMDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LRU_ITEMDESCRIPNED_C',
        })
    public LRU_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'LRU_PDCSTATE_C',
        })
    public LRU_PDCSTATE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'LRU_GLOBALSTOCK_D',
        })
    public LRU_GLOBALSTOCK_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'LRU_EANCODE_N',
        })
    public LRU_EANCODE_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LRU_LASTSALE_DAT',
        })
    public LRU_LASTSALE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'LRU_SUPPLIERID_C',
        })
    public LRU_SUPPLIERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LRU_CANBEORDERED_C',
        })
    public LRU_CANBEORDERED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_HORFACING_N',
        })
    public LRU_HORFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_VERTFACING_N',
        })
    public LRU_VERTFACING_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'LRU_AVERAGENORMSALES_D',
        })
    public LRU_AVERAGENORMSALES_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 45,
        name: 'LRU_REASON_C',
        })
    public LRU_REASON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LRU_BARCODE_C',
        })
    public LRU_BARCODE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_YEAR_N',
        })
    public LRU_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'LRU_ORDERID_N',
        })
    public LRU_ORDERID_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LRU_QTYORDERED_D',
        })
    public LRU_QTYORDERED_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LRU_ORDERDATE_DAT',
        })
    public LRU_ORDERDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'LRU_SALESCOEFF_D',
        })
    public LRU_SALESCOEFF_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LRU_LASTORDER_DAT',
        })
    public LRU_LASTORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LRU_LASTRECEPT_DAT',
        })
    public LRU_LASTRECEPT_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'LRU_PDCQTYPROPOSED_D',
        })
    public LRU_PDCQTYPROPOSED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'LRU_PDCQTYORDERED_D',
        })
    public LRU_PDCQTYORDERED_D: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'LRU_REASON_N',
        })
    public LRU_REASON_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'LRU_REASONARG1_C',
        })
    public LRU_REASONARG1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'LRU_REASONARG2_C',
        })
    public LRU_REASONARG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'LRU_USERID_C',
        })
    public LRU_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LRU_DATE_DAT',
        })
    public LRU_DATE_DAT: Date | null;

    @Column('tinyint', {
        nullable: true,
        name: 'LRU_REASONPRINTORDER_N',
        })
    public LRU_REASONPRINTORDER_N: number | null;

}
