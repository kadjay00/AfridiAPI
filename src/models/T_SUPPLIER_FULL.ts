import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_FULL', {schema: 'dbo' } )
export class T_SUPPLIER_FULL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'SUP_SUPPLIERID_C',
        })
    public SUP_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SUP_SUPPLIERCODE_C',
        })
    public SUP_SUPPLIERCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'SUP_FUNCTIONPLACE_C',
        })
    public SUP_FUNCTIONPLACE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SUP_COMPANYNAME_C',
        })
    public SUP_COMPANYNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SUP_TAXREGISTER_C',
        })
    public SUP_TAXREGISTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SUP_TRADEREGISTER_C',
        })
    public SUP_TRADEREGISTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SUP_MANAGERNAME_C',
        })
    public SUP_MANAGERNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SUP_ADDRESS_C',
        })
    public SUP_ADDRESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SUP_POSTALCODE_C',
        })
    public SUP_POSTALCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SUP_PLACE_C',
        })
    public SUP_PLACE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SUP_TELEPHONE_C',
        })
    public SUP_TELEPHONE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 31,
        name: 'SUP_TELEFAX_C',
        })
    public SUP_TELEFAX_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SUP_ORDERDAY_C',
        })
    public SUP_ORDERDAY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SUP_SUPPLYDAY_C',
        })
    public SUP_SUPPLYDAY_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SUP_SUPPLYTIME_C',
        })
    public SUP_SUPPLYTIME_C: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SUP_REMARK_C',
        })
    public SUP_REMARK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SUP_USERID_C',
        })
    public SUP_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_RECAP_C',
        })
    public SUP_RECAP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_CCFD_C',
        })
    public SUP_CCFD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SUP_SUPPLIERSAP_C',
        })
    public SUP_SUPPLIERSAP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SUP_POBOX_C',
        })
    public SUP_POBOX_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SUP_TYPE_C',
        })
    public SUP_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SUP_LINE_C',
        })
    public SUP_LINE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SUP_FLAGSFN_C',
        })
    public SUP_FLAGSFN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_BLOCKPURCH_C',
        })
    public SUP_BLOCKPURCH_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SUP_BLOCKMVT_C',
        })
    public SUP_BLOCKMVT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_BLOCKED_C',
        })
    public SUP_BLOCKED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_LOCALSUPPLIER_C',
        })
    public SUP_LOCALSUPPLIER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_CENTRALSUPCODE_C',
        })
    public SUP_CENTRALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_LOCALSUPCODE_C',
        })
    public SUP_LOCALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_LANGUAGECODE_C',
        })
    public SUP_LANGUAGECODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SUP_COUNTRY_C',
        })
    public SUP_COUNTRY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SUP_TERM_C',
        })
    public SUP_TERM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SUP_BLOCKPAY_C',
        })
    public SUP_BLOCKPAY_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SUP_SUPDATE_DAT',
        })
    public SUP_SUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SUP_VALIDICE_C',
        })
    public SUP_VALIDICE_C: string | null;

}
