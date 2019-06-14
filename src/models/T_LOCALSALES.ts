import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LOCALSALES', {schema: 'dbo' } )
export class T_LOCALSALES {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'LOS_ID_N',
        })
    public LOS_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'LOS_IDNUMBER_C',
        })
    public LOS_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        name: 'LOS_STATE_C',
        })
    public LOS_STATE_C: string;

    @Column('char', {
        nullable: false,
        name: 'LOS_TYPE_C',
        })
    public LOS_TYPE_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'LOS_VALUE_D',
        })
    public LOS_VALUE_D: number;

    @Column('datetime', {
        nullable: false,
        name: 'LOS_DATE_DAT',
        })
    public LOS_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'LOS_USERID_C',
        })
    public LOS_USERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LOS_PDT_C',
        })
    public LOS_PDT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LOS_ACTIVESELLINGPRICE_D',
        })
    public LOS_ACTIVESELLINGPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LOS_PROMO_C',
        })
    public LOS_PROMO_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'LOS_STOCK_D',
        })
    public LOS_STOCK_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'LOS_VALIDITYSTART_DAT',
        })
    public LOS_VALIDITYSTART_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LOS_VALIDITYEND_DAT',
        })
    public LOS_VALIDITYEND_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'LOS_CHANGEDATE_DAT',
        })
    public LOS_CHANGEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'LOS_CHANGEUSERID_C',
        })
    public LOS_CHANGEUSERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'LOS_VALIDATIONDATE_DAT',
        })
    public LOS_VALIDATIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'LOS_VALIDATIONUSERID_C',
        })
    public LOS_VALIDATIONUSERID_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'LOS_VALIDATIONPRICE_D',
        })
    public LOS_VALIDATIONPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LOS_VALIDATIONPROMO_C',
        })
    public LOS_VALIDATIONPROMO_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'LOS_VALIDATIONSTOCK_D',
        })
    public LOS_VALIDATIONSTOCK_D: number | null;

}
