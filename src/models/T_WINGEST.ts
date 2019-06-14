import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_WINGEST', {schema: 'dbo' } )
@Index('IX_IDNUMBER', ['IT1_IDNUMBER_C' ])
@Index('IX_WINGEST_DOCNUMBER', ['WI_REPRISE_DAT', 'WI_DOCNUMBER_N', 'WI_SUBDEPARTMENT_N', 'WI_TYPE_C'])
@Index('IX_WINGEST_INVENTORY', ['WI_INVENTAIREID_N', 'WI_EMPLAPP_N', 'WI_TYPE_C'])
@Index('IX_WINGEST_INVENTORY_SDEP', ['WI_INVENTAIREID_N', 'WI_SUBDEPARTMENT_N', 'IT1_TAXCODE_C'])
@Index('IX_WINGEST_SUPPLIERID', ['WI_SUPPLIERID_C'])
@Index('IX_WINGEST_TYPE_DOCNUMBER', ['WI_TYPE_C', 'WI_DOCNUMBER_N'])
export class T_WINGEST {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RE_REPRISE_N',
        })
    public RE_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RE_RECORD_N',
        })
    public RE_RECORD_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'WI_REPRISE_DAT',
        })
    public WI_REPRISE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'WI_LDTID_C',
        })
    public WI_LDTID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_TYPE_C',
        })
    public WI_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WI_INVENTAIREID_N',
        })
    public WI_INVENTAIREID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'WI_EMPLAPP_N',
        })
    public WI_EMPLAPP_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'WI_ARTICLE_C',
        })
    public WI_ARTICLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'WI_RAYON_C',
        })
    public WI_RAYON_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'WI_QUANTITY_D',
        })
    public WI_QUANTITY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICE1_D',
        })
    public WI_PRICE1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICE2_D',
        })
    public WI_PRICE2_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'WI_FLAG_TYPE_C',
        })
    public WI_FLAG_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WI_EMPLRECORD_N',
        })
    public WI_EMPLRECORD_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'INV_SECTORID_C',
        })
    public INV_SECTORID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_EREPRISE_C',
        })
    public WI_EREPRISE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_EARTICLE',
        })
    public WI_EARTICLE: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_EDELETE',
        })
    public WI_EDELETE: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_EDATE',
        })
    public WI_EDATE: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'WI_QUANTITYCOR_D',
        })
    public WI_QUANTITYCOR_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICE1COR_D',
        })
    public WI_PRICE1COR_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICE2COR_D',
        })
    public WI_PRICE2COR_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'WI_COR_DAT',
        })
    public WI_COR_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'WI_CORUSER_C',
        })
    public WI_CORUSER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IT1_IDNUMBER_C',
        })
    public IT1_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IT1_GIBREF_C',
        })
    public IT1_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'WI_UNITREF',
        })
    public WI_UNITREF: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT1_TAXCODE_C',
        })
    public IT1_TAXCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICEIMPUT1_D',
        })
    public WI_PRICEIMPUT1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICEIMPUT2_D',
        })
    public WI_PRICEIMPUT2_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'WI_SAISIE_N',
        })
    public WI_SAISIE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IT1_ACTIVESELLINGPRICE_D',
        })
    public IT1_ACTIVESELLINGPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'WI_PROFIT_D',
        })
    public WI_PROFIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_COSTPRICE_D',
        })
    public WI_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_PRICEHT_D',
        })
    public WI_PRICEHT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'WI_ESTIMATEDCOSTPRICE_C',
        })
    public WI_ESTIMATEDCOSTPRICE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'WI_DESCRIPTION_C',
        })
    public WI_DESCRIPTION_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WI_SUBDEPARTMENT_N',
        })
    public WI_SUBDEPARTMENT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'WI_EMPTYUNITPRICE_D',
        })
    public WI_EMPTYUNITPRICE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'WI_DOCNUMBER_N',
        })
    public WI_DOCNUMBER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'WI_ARTICLEORIGIN_C',
        })
    public WI_ARTICLEORIGIN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_FLAGTYPEORIGIN_C',
        })
    public WI_FLAGTYPEORIGIN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_FLAGREFUNKNOWN_C',
        })
    public WI_FLAGREFUNKNOWN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'WI_STOREFROM_C',
        })
    public WI_STOREFROM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'WI_STORETO_C',
        })
    public WI_STORETO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'WI_ACCOUNT_C',
        })
    public WI_ACCOUNT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'WI_EXPEDITIONDATE_DAT',
        })
    public WI_EXPEDITIONDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'WI_SUBDEPDEST_N',
        })
    public WI_SUBDEPDEST_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'WI_PRICECURRENCY_C',
        })
    public WI_PRICECURRENCY_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'WI_SHIPPINGNOTE_N',
        })
    public WI_SHIPPINGNOTE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'WI_ACTIVECOSTPRICE_D',
        })
    public WI_ACTIVECOSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'WI_QUANTITYUSER_D',
        })
    public WI_QUANTITYUSER_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'WI_SUPPLIERTYPE_C',
        })
    public WI_SUPPLIERTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'WI_SUPPLIERID_C',
        })
    public WI_SUPPLIERID_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'WI_STOCKATVALIDATION_D',
        })
    public WI_STOCKATVALIDATION_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'WI_ORIGIN_C',
        })
    public WI_ORIGIN_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'WI_LINKEDRECORD_N',
        })
    public WI_LINKEDRECORD_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'WI_PACKAGE_N',
        })
    public WI_PACKAGE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'WI_SELLINGUNITCODE_C',
        })
    public WI_SELLINGUNITCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'WI_CODE128_C',
        })
    public WI_CODE128_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 3,
        name: 'WI_CODE128WEIGHT_D',
        })
    public WI_CODE128WEIGHT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'wi_AGEING_D',
        })
    public wi_AGEING_D: number | null;

}
