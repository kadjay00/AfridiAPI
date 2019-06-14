import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEM2', {schema: 'dbo' } )
@Index('IDX_ITEM2_INOUTDATES', ['IT2_INOUTSTARTDATE_DAT', 'IT2_INOUTENDDATE_DAT'])
@Index('IX_ITEM2_DEPGIBREF', ['IT2_DEPARTMENT_N', 'IT2_GIBREF_C'])
@Index('IX_ITEM2_SUPPLIER', ['IT2_SUPPLIERID_C'])
@Index('IX_ITEM2_SUPPLIERRETOUR', ['IT2_SUPPLIERRETOUR_C'])
export class T_ITEM2 {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IT2_IDNUMBER_C',
        })
    public idNumber: string;

    @Column('int', {
        nullable: false,
        name: 'IT2_DEPARTMENT_N',
        })
    public IT2_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 7,
        name: 'IT2_GIBREF_C',
        })
    public IT2_GIBREF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IT2_PAGELINE_C',
        })
    public IT2_PAGELINE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_PURCHCENTER_N',
        })
    public IT2_PURCHCENTER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_PURCHID_N',
        })
    public IT2_PURCHID_N: number | null;

    @Column('varchar', {
        nullable: false,
        length: 13,
        name: 'IT2_SUPPLIERID_C',
        })
    public IT2_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'IT2_SUPPLIERREF_C',
        })
    public IT2_SUPPLIERREF_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_ACTIVITY_N',
        })
    public IT2_ACTIVITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_INOUTCODE_C',
        })
    public IT2_INOUTCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_INOUTSTARTDATE_DAT',
        })
    public IT2_INOUTSTARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_INOUTENDDATE_DAT',
        })
    public IT2_INOUTENDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IT2_REMARK_C',
        })
    public IT2_REMARK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_SLOWMOVER_C',
        })
    public IT2_SLOWMOVER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_TECHNICALCODE_C',
        })
    public IT2_TECHNICALCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT2_ECOTAXCODE_C',
        })
    public IT2_ECOTAXCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IT2_ITEMDESCRIPMUL_C',
        })
    public IT2_ITEMDESCRIPMUL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IT2_BONBASE_C',
        })
    public IT2_BONBASE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_AVERAGEWEEK_N',
        })
    public IT2_AVERAGEWEEK_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_POSITIONINFAM_N',
        })
    public IT2_POSITIONINFAM_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_ITEMSINFAM_N',
        })
    public IT2_ITEMSINFAM_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_FACING_N',
        })
    public IT2_FACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_ORDERPOINT_N',
        })
    public IT2_ORDERPOINT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IT2_LOCATION_C',
        })
    public IT2_LOCATION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_ORDERMANAGEMENT_C',
        })
    public IT2_ORDERMANAGEMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_STOCKMANAGEMENT_C',
        })
    public IT2_STOCKMANAGEMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG9_C',
        })
    public IT2_FLAG9_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG10_C',
        })
    public IT2_FLAG10_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG11_C',
        })
    public IT2_FLAG11_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG12_C',
        })
    public IT2_FLAG12_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG13_C',
        })
    public IT2_FLAG13_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG14_C',
        })
    public IT2_FLAG14_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_FLAG15_C',
        })
    public IT2_FLAG15_C: string | null;

    @Column('timestamp', {
        nullable: true,
        name: 'IT2_LASTUPDATE_TS',
        })
    public IT2_LASTUPDATE_TS: Date | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'IT2_LASTSALE_EANCODE_N',
        })
    public IT2_LASTSALE_EANCODE_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_PERMREDSTART_DAT',
        })
    public IT2_PERMREDSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_PERMREDEND_DAT',
        })
    public IT2_PERMREDEND_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_PERMREDTYPE_C',
        })
    public IT2_PERMREDTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_PERMREDLABEL_C',
        })
    public IT2_PERMREDLABEL_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT2_GUELTAGE_D',
        })
    public IT2_GUELTAGE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_ORI_GUELTAGE_C',
        })
    public IT2_ORI_GUELTAGE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_SELFSCANUPDATE_DAT',
        })
    public IT2_SELFSCANUPDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'IT2_SELFSCANACTION_C',
        })
    public IT2_SELFSCANACTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT2_FLAGRETOUR_C',
        })
    public IT2_FLAGRETOUR_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'IT2_AGEING_D',
        })
    public IT2_AGEING_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'IT2_SUPPLIERRETOUR_C',
        })
    public IT2_SUPPLIERRETOUR_C: string | null;

    @Column('char', {
        nullable: true,
        length: 6,
        name: 'IT2_SUPPLIERID_SAP_C',
        })
    public IT2_SUPPLIERID_SAP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_GUELTAGE_DAT',
        })
    public IT2_GUELTAGE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IT2_GUELTAGE_AMOUNT_D',
        })
    public IT2_GUELTAGE_AMOUNT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IT2_RCNDCTN_NOTION_C',
        })
    public IT2_RCNDCTN_NOTION_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IT2_AVERAGEWEEK4_N',
        })
    public IT2_AVERAGEWEEK4_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'IT2_INDISPENSABLE_C',
        })
    public IT2_INDISPENSABLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'IT2_ECOCHEQUE_C',
        })
    public IT2_ECOCHEQUE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'IT2_ECOCHEQUEUSR_C',
        })
    public IT2_ECOCHEQUEUSR_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IT2_ECOCHEQUEUPDATE_DAT',
        })
    public IT2_ECOCHEQUEUPDATE_DAT: Date | null;

}
