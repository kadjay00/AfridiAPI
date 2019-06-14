import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACEPOS', {schema: 'dbo' } )
export class T_INTERFACEPOS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'POS_SEQUENCENBR_N',
        })
    public POS_SEQUENCENBR_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 13,
        scale: 0,
        name: 'POS_EANCODE_N',
        })
    public POS_EANCODE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'POS_IDNUMBER_C',
        })
    public POS_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        name: 'POS_UPDATELOAD_C',
        })
    public POS_UPDATELOAD_C: string;

    @Column('char', {
        nullable: false,
        name: 'POS_TYPETRNSM_C',
        })
    public POS_TYPETRNSM_C: string;

    @Column('char', {
        nullable: true,
        name: 'POS_DELETEFLAG_C',
        })
    public POS_DELETEFLAG_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'POS_DEPARTMENT_N',
        })
    public POS_DEPARTMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'POS_SUBDEPARTMENT_N',
        })
    public POS_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'POS_GIBREF_C',
        })
    public POS_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'POS_ACTIVESELLINGPRICE_D',
        })
    public POS_ACTIVESELLINGPRICE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'POS_EMPTYUNITPLU_N',
        })
    public POS_EMPTYUNITPLU_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'POS_POSDESCRIPNED_C',
        })
    public POS_POSDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'POS_POSDESCRIPFRA_C',
        })
    public POS_POSDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'POS_POSDESCRIPMUL_C',
        })
    public POS_POSDESCRIPMUL_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'POS_CONSUMPTIONUNIT_D',
        })
    public POS_CONSUMPTIONUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'POS_BRAND_C',
        })
    public POS_BRAND_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_TAXCODE_C',
        })
    public POS_TAXCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_FLAG7_C',
        })
    public POS_FLAG7_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_FLAG11_C',
        })
    public POS_FLAG11_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_FLAG12_C',
        })
    public POS_FLAG12_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_FLAG13_C',
        })
    public POS_FLAG13_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_FLAG14_C',
        })
    public POS_FLAG14_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'POS_PRICECURRENCY_C',
        })
    public POS_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'POS_FLAG2_C',
        })
    public POS_FLAG2_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'POS_REGULARPRICE_D',
        })
    public POS_REGULARPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'POS_GROUP_C',
        })
    public POS_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'POS_ACTIVITY_N',
        })
    public POS_ACTIVITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'POS_SALESFAMILY_C',
        })
    public POS_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'POS_SALESSUBFAMILY_C',
        })
    public POS_SALESSUBFAMILY_C: string | null;

}
