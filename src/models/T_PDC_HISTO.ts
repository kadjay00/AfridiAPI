import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_HISTO', {schema: 'dbo' } )
export class T_PDC_HISTO {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PDC_PDCNUMBER_N',
        })
    public PDC_PDCNUMBER_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'PDC_CALCUL_DAT',
        })
    public PDC_CALCUL_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDC_GROUP_C',
        })
    public PDC_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_ACTIVITY_N',
        })
    public PDC_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_SUBDEPARTMENT_N',
        })
    public PDC_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDC_SALESGROUP_C',
        })
    public PDC_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDC_SALESFAMILY_C',
        })
    public PDC_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDC_SALESSUBFAMILY_C',
        })
    public PDC_SALESSUBFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'PDC_SUPPLIERID_C',
        })
    public PDC_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDC_LOGISTICGROUP_C',
        })
    public PDC_LOGISTICGROUP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDC_DELIVERY_DAT',
        })
    public PDC_DELIVERY_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDC_NEXTORDER_DAT',
        })
    public PDC_NEXTORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDC_NEXTDELIVERY_DAT',
        })
    public PDC_NEXTDELIVERY_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PDC_CALLHOUR_C',
        })
    public PDC_CALLHOUR_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_EXCLUDENEXTDELIV_C',
        })
    public PDC_EXCLUDENEXTDELIV_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDC_COEFFVARLOCCOM_D',
        })
    public PDC_COEFFVARLOCCOM_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDC_ORDERFREQUENCY_C',
        })
    public PDC_ORDERFREQUENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_BLOCKCOEFFVARLOCCOM_C',
        })
    public PDC_BLOCKCOEFFVARLOCCOM_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_HISTOSALES_N',
        })
    public PDC_HISTOSALES_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDC_SALESCOEFF_D',
        })
    public PDC_SALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDC_VARIATIONTAX_D',
        })
    public PDC_VARIATIONTAX_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_CONFIRMATION_C',
        })
    public PDC_CONFIRMATION_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDC_TOTALAMOUNT_D',
        })
    public PDC_TOTALAMOUNT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDC_TOTALCOLIS_D',
        })
    public PDC_TOTALCOLIS_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_PRINTVERSION_N',
        })
    public PDC_PRINTVERSION_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDC_ABNORMALSALESCOEFF_D',
        })
    public PDC_ABNORMALSALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDC_STOCKPERIODCOEFF_D',
        })
    public PDC_STOCKPERIODCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_AUTOPRINT_C',
        })
    public PDC_AUTOPRINT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PDC_VALIDATIONHOUR_C',
        })
    public PDC_VALIDATIONHOUR_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDC_TOTALSTOCKPERIODS_D',
        })
    public PDC_TOTALSTOCKPERIODS_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_TOTALREFS_N',
        })
    public PDC_TOTALREFS_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_STATE_C',
        })
    public PDC_STATE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_HEADER_N',
        })
    public PDC_HEADER_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDC_AVERAGESTOCKPERIODS_D',
        })
    public PDC_AVERAGESTOCKPERIODS_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDC_USERID_C',
        })
    public PDC_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDC_MODIFIED_DAT',
        })
    public PDC_MODIFIED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_AUTOPRINT_EXCEP_C',
        })
    public PDC_AUTOPRINT_EXCEP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDC_MANAGER_N',
        })
    public PDC_MANAGER_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_CMDCENTRAL_C',
        })
    public PDC_CMDCENTRAL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_DELIVERYCODE_C',
        })
    public PDC_DELIVERYCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PDC_OPTIMIZED_C',
        })
    public PDC_OPTIMIZED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'PDC_OPTIMIZEDUSER_C',
        })
    public PDC_OPTIMIZEDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDC_OPTIMIZEDDATE_DAT',
        })
    public PDC_OPTIMIZEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PDC_CADENCETYPE_C',
        })
    public PDC_CADENCETYPE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'PDC_CALENDARID_N',
        })
    public PDC_CALENDARID_N: number | null;

}
