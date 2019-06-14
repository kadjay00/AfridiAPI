import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STORE', {schema: 'dbo' } )
@Index('IX_STORE_PKINDEX', ['STO_STOREID_C'], {unique: true})
export class T_STORE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'STO_STOREID_C',
        })
    public STO_STOREID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'STO_FUNCTIONPLACE_C',
        })
    public STO_FUNCTIONPLACE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STO_COMPANYNAME_C',
        })
    public STO_COMPANYNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_TAXREGISTER_C',
        })
    public STO_TAXREGISTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_TRADEREGISTER_C',
        })
    public STO_TRADEREGISTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STO_MANAGERNAME_C',
        })
    public STO_MANAGERNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STO_STORENAME_C',
        })
    public STO_STORENAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STO_ADDRESS_C',
        })
    public STO_ADDRESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STO_POSTALCODE_C',
        })
    public STO_POSTALCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STO_PLACE_C',
        })
    public STO_PLACE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_TELEPHONE_C',
        })
    public STO_TELEPHONE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_TELEFAX_C',
        })
    public STO_TELEFAX_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_NUMBER1_C',
        })
    public STO_NUMBER1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_NUMBER2_C',
        })
    public STO_NUMBER2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_NUMBER3_C',
        })
    public STO_NUMBER3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_NUMBER4_C',
        })
    public STO_NUMBER4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STO_NUMBER5_C',
        })
    public STO_NUMBER5_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STO_LANGUAGECODE_C',
        })
    public STO_LANGUAGECODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STO_FRANCHISE_C',
        })
    public STO_FRANCHISE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'STO_SECTOR_C',
        })
    public STO_SECTOR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'STO_ZONEGEO_C',
        })
    public STO_ZONEGEO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'STO_PRICEZONE_C',
        })
    public STO_PRICEZONE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENMON_C',
        })
    public STO_OPENMON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENTUE_C',
        })
    public STO_OPENTUE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENWED_C',
        })
    public STO_OPENWED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENTHU_C',
        })
    public STO_OPENTHU_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENFRI_C',
        })
    public STO_OPENFRI_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENSAT_C',
        })
    public STO_OPENSAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_OPENSUN_C',
        })
    public STO_OPENSUN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'STO_USERID_C',
        })
    public STO_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'STO_COUNTRY_C',
        })
    public STO_COUNTRY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_DELIVERYNAME_C',
        })
    public STO_DELIVERYNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_DELIVERYADRESS_C',
        })
    public STO_DELIVERYADRESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STO_DELIVERYPOSTALCODE_C',
        })
    public STO_DELIVERYPOSTALCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_DELIVERYPLACE_C',
        })
    public STO_DELIVERYPLACE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'STO_DELIVERYCOUNTRY_C',
        })
    public STO_DELIVERYCOUNTRY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_DELIVERYTELEPHONE_C',
        })
    public STO_DELIVERYTELEPHONE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_DELIVERYTELEFAX_C',
        })
    public STO_DELIVERYTELEFAX_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_BILLINGTAXREGISTER1_C',
        })
    public STO_BILLINGTAXREGISTER1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGNAME1_C',
        })
    public STO_BILLINGNAME1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGADDRESS1_C',
        })
    public STO_BILLINGADDRESS1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STO_BILLINGPOSTALCODE1_C',
        })
    public STO_BILLINGPOSTALCODE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGPLACE1_C',
        })
    public STO_BILLINGPLACE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'STO_BILLINGCOUNTRY1_C',
        })
    public STO_BILLINGCOUNTRY1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEPHONE1_C',
        })
    public STO_BILLINGTELEPHONE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEFAX1_C',
        })
    public STO_BILLINGTELEFAX1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_BILLINGTAXREGISTER2_C',
        })
    public STO_BILLINGTAXREGISTER2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGNAME2_C',
        })
    public STO_BILLINGNAME2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGADDRESS2_C',
        })
    public STO_BILLINGADDRESS2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STO_BILLINGPOSTALCODE2_C',
        })
    public STO_BILLINGPOSTALCODE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGPLACE2_C',
        })
    public STO_BILLINGPLACE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'STO_BILLINGCOUNTRY2_C',
        })
    public STO_BILLINGCOUNTRY2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEPHONE2_C',
        })
    public STO_BILLINGTELEPHONE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEFAX2_C',
        })
    public STO_BILLINGTELEFAX2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_BILLINGTAXREGISTER3_C',
        })
    public STO_BILLINGTAXREGISTER3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGNAME3_C',
        })
    public STO_BILLINGNAME3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGADDRESS3_C',
        })
    public STO_BILLINGADDRESS3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STO_BILLINGPOSTALCODE3_C',
        })
    public STO_BILLINGPOSTALCODE3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGPLACE3_C',
        })
    public STO_BILLINGPLACE3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'STO_BILLINGCOUNTRY3_C',
        })
    public STO_BILLINGCOUNTRY3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEPHONE3_C',
        })
    public STO_BILLINGTELEPHONE3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEFAX3_C',
        })
    public STO_BILLINGTELEFAX3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'STO_BILLINGTAXREGISTER4_C',
        })
    public STO_BILLINGTAXREGISTER4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGNAME4_C',
        })
    public STO_BILLINGNAME4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGADDRESS4_C',
        })
    public STO_BILLINGADDRESS4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STO_BILLINGPOSTALCODE4_C',
        })
    public STO_BILLINGPOSTALCODE4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'STO_BILLINGPLACE4_C',
        })
    public STO_BILLINGPLACE4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'STO_BILLINGCOUNTRY4_C',
        })
    public STO_BILLINGCOUNTRY4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEPHONE4_C',
        })
    public STO_BILLINGTELEPHONE4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'STO_BILLINGTELEFAX4_C',
        })
    public STO_BILLINGTELEFAX4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STO_SPOTTERLANGUAGECODE_C',
        })
    public STO_SPOTTERLANGUAGECODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'STO_BILLINGEMAIL1_C',
        })
    public STO_BILLINGEMAIL1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'STO_BILLINGEMAIL2_C',
        })
    public STO_BILLINGEMAIL2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'STO_BILLINGEMAIL3_C',
        })
    public STO_BILLINGEMAIL3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'STO_BILLINGEMAIL4_C',
        })
    public STO_BILLINGEMAIL4_C: string | null;

}
