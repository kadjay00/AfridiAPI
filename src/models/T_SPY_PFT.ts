import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_PFT', {schema: 'dbo' } )
export class T_SPY_PFT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPY_IDNUMBER_N',
        })
    public SPY_IDNUMBER_N: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_DATECALCUL_DAT',
        })
    public SPY_DATECALCUL_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SPY_ACTIVITY_N',
        })
    public SPY_ACTIVITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SPY_SOURCESTAT_C',
        })
    public SPY_SOURCESTAT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_VTEACOUVRIR_D',
        })
    public SPY_VTEACOUVRIR_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_SECURITYSTOCK_D',
        })
    public SPY_SECURITYSTOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_STOCKDISPO_D',
        })
    public SPY_STOCKDISPO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_ENCOURS_D',
        })
    public SPY_ENCOURS_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SPY_SHIPPINGUNIT_D',
        })
    public SPY_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_QTYCALC_D',
        })
    public SPY_QTYCALC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_QTYCALC_UNIT_D',
        })
    public SPY_QTYCALC_UNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SPY_SHIPPINGUNIT_NPP_D',
        })
    public SPY_SHIPPINGUNIT_NPP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPY_QTYCALC_NPP_D',
        })
    public SPY_QTYCALC_NPP_D: number | null;

}
