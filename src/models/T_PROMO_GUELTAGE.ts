import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMO_GUELTAGE', {schema: 'dbo' } )
export class T_PROMO_GUELTAGE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PRO_PROMONBR_N',
        })
    public PRO_PROMONBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'PRO_PROMOTYPE_N',
        })
    public PRO_PROMOTYPE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PRO_PRICECURRENCY_C',
        })
    public PRO_PRICECURRENCY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRO_DESCRIPTION_C',
        })
    public PRO_DESCRIPTION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_STARTDATE_DAT',
        })
    public PRO_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_ENDDATE_DAT',
        })
    public PRO_ENDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'PRO_POSTEXT1_C',
        })
    public PRO_POSTEXT1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'PRO_POSTEXT2_C',
        })
    public PRO_POSTEXT2_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'PRO_DISCOUNTAMOUNT_N',
        })
    public PRO_DISCOUNTAMOUNT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_DISCOUNTQTY_N',
        })
    public PRO_DISCOUNTQTY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_DISCOUNTFRACTION_N',
        })
    public PRO_DISCOUNTFRACTION_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'PRO_DISCOUNTPCT1_D',
        })
    public PRO_DISCOUNTPCT1_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'PRO_DISCOUNTPCT2_D',
        })
    public PRO_DISCOUNTPCT2_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'PRO_DISCOUNTPOINTS_N',
        })
    public PRO_DISCOUNTPOINTS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_NBRTOMBOLA_N',
        })
    public PRO_NBRTOMBOLA_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'PRO_BASEAMOUNT_N',
        })
    public PRO_BASEAMOUNT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_BASEQTY1_N',
        })
    public PRO_BASEQTY1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_BASEQTY2_N',
        })
    public PRO_BASEQTY2_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_CONDITIONCARD_N',
        })
    public PRO_CONDITIONCARD_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_CONDITIONTICKET_N',
        })
    public PRO_CONDITIONTICKET_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_CUMULPOINTS_N',
        })
    public PRO_CUMULPOINTS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_CODEORIGINE_N',
        })
    public PRO_CODEORIGINE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PRO_EANGIBBON_N',
        })
    public PRO_EANGIBBON_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_NBRITEMS_N',
        })
    public PRO_NBRITEMS_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_CREATIONDATE_DAT',
        })
    public PRO_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_UPDATEDATE_DAT',
        })
    public PRO_UPDATEDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PRO_TRNSMCODE_C',
        })
    public PRO_TRNSMCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRO_TRNSMDATE_DAT',
        })
    public PRO_TRNSMDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_TRNSMSESSION_N',
        })
    public PRO_TRNSMSESSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'pro_user_c',
        })
    public pro_user_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'pro_userdelete_c',
        })
    public pro_userdelete_c: string | null;

    @Column('int', {
        nullable: true,
        name: 'pro_promocentrale_n',
        })
    public pro_promocentrale_n: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRO_PROMOTYPE_STORELINE_N',
        })
    public PRO_PROMOTYPE_STORELINE_N: number | null;

    @Column('bigint', {
        nullable: true,
        name: 'PRO_NBRLINES_N',
        })
    public PRO_NBRLINES_N: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PRO_MARQUEPROPRE_C',
        })
    public PRO_MARQUEPROPRE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PRO_TOEXPLODE_C',
        })
    public PRO_TOEXPLODE_C: string | null;

}
