import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_DEF', {schema: 'dbo' } )
export class T_RECEPTION_DEF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'REC_RECEPTION_N',
        })
    public REC_RECEPTION_N: number;

    @Column('char', {
        nullable: true,
        name: 'REC_TYPE_C',
        })
    public REC_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_FOODNFOOD_C',
        })
    public REC_FOODNFOOD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REC_DOCNUMBER_C',
        })
    public REC_DOCNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'REC_SUPPLIERID_C',
        })
    public REC_SUPPLIERID_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'REC_STAMPNUMBER_C',
        })
    public REC_STAMPNUMBER_C: number | null;

    @Column('int', {
        nullable: true,
        name: 'REC_PALETTENBR_N',
        })
    public REC_PALETTENBR_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'REC_STATUS_C',
        })
    public REC_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REC_USERID_C',
        })
    public REC_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_CREATIONDATE_DAT',
        })
    public REC_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_UPDATEDATE_DAT',
        })
    public REC_UPDATEDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'REC_SUPCODE_C',
        })
    public REC_SUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_SUPDATE_DAT',
        })
    public REC_SUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'REC_STOREID_C',
        })
    public REC_STOREID_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'REC_YEAR_N',
        })
    public REC_YEAR_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_RECEPTION_DAT',
        })
    public REC_RECEPTION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REC_CARNUMBER_C',
        })
    public REC_CARNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REC_DELIVFORM_C',
        })
    public REC_DELIVFORM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REC_CARRFORM_C',
        })
    public REC_CARRFORM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_PLOMB_C',
        })
    public REC_PLOMB_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_TEMPER_C',
        })
    public REC_TEMPER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'REC_PALETTEPHYSNBR_N',
        })
    public REC_PALETTEPHYSNBR_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'REC_COLLISDELIV_N',
        })
    public REC_COLLISDELIV_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'REC_COLLISREEL_N',
        })
    public REC_COLLISREEL_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'REC_STATUSMAJSTOCK_C',
        })
    public REC_STATUSMAJSTOCK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'REC_COMMENT_C',
        })
    public REC_COMMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_WITHOUTORDER_C',
        })
    public REC_WITHOUTORDER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_TRANSMIT_DAT',
        })
    public REC_TRANSMIT_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'REC_PRINTED_C',
        })
    public REC_PRINTED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REC_CARRPLATE_C',
        })
    public REC_CARRPLATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REC_PLOMBNUMBER_C',
        })
    public REC_PLOMBNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_OTHERSUPPLIER_C',
        })
    public REC_OTHERSUPPLIER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_LOGBOOK_C',
        })
    public REC_LOGBOOK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_ORDERUPDATED_C',
        })
    public REC_ORDERUPDATED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REC_CHECKEDBY_C',
        })
    public REC_CHECKEDBY_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_CHECKED_DAT',
        })
    public REC_CHECKED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'REC_CHECK_PDTTYPE_C',
        })
    public REC_CHECK_PDTTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_RFID_C',
        })
    public REC_RFID_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'REC_TOTALSALE_D',
        })
    public REC_TOTALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'REC_TOTALCOST_D',
        })
    public REC_TOTALCOST_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'REC_DELTA_DELIVERED_C',
        })
    public REC_DELTA_DELIVERED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REC_DELTA_ORDER_C',
        })
    public REC_DELTA_ORDER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'REC_PALETRF_C',
        })
    public REC_PALETRF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'REC_INUSEBYUSERID_C',
        })
    public REC_INUSEBYUSERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'REC_INUSEBYCOMPUTER_C',
        })
    public REC_INUSEBYCOMPUTER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REC_INUSEBYDATE_DAT',
        })
    public REC_INUSEBYDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'REC_SHORTCUT_C',
        })
    public REC_SHORTCUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'REC_PALETRFV2_C',
        })
    public REC_PALETRFV2_C: string | null;

}
