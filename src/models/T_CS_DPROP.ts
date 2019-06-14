import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DPROP', {schema: 'dbo' } )
export class T_CS_DPROP {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CDP_REPORTID_N',
        })
    public CDP_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'CDP_KEYID_N',
        })
    public CDP_KEYID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'CDP_IDNUMBER_C',
        })
    public CDP_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'CDP_FAMILY_C',
        })
    public CDP_FAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'CDP_SUBFAMILY_C',
        })
    public CDP_SUBFAMILY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PREFIXCODE_C',
        })
    public CDP_PREFIXCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CDP_PROMOTIONCODE_C',
        })
    public CDP_PROMOTIONCODE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'CDP_COEFFICIENT_N',
        })
    public CDP_COEFFICIENT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CDP_SALESPRICE_N',
        })
    public CDP_SALESPRICE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROFITCODE_C',
        })
    public CDP_PROFITCODE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPMON_N',
        })
    public CDP_PROPMON_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROPCODEMON_C',
        })
    public CDP_PROPCODEMON_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPTUE_N',
        })
    public CDP_PROPTUE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROPCODETUE_C',
        })
    public CDP_PROPCODETUE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPWED_N',
        })
    public CDP_PROPWED_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROPCODEWED_C',
        })
    public CDP_PROPCODEWED_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPTHU_N',
        })
    public CDP_PROPTHU_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROPCODETHU_C',
        })
    public CDP_PROPCODETHU_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPFRI_N',
        })
    public CDP_PROPFRI_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROPCODEFRI_C',
        })
    public CDP_PROPCODEFRI_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPSAT_N',
        })
    public CDP_PROPSAT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_PROPCODESAT_C',
        })
    public CDP_PROPCODESAT_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_PROPTOT_N',
        })
    public CDP_PROPTOT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CDP_THEORITICALSTOCK_N',
        })
    public CDP_THEORITICALSTOCK_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_CODETHEORITICALSTOCK_C',
        })
    public CDP_CODETHEORITICALSTOCK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CDP_PRICECURRENCY_C',
        })
    public CDP_PRICECURRENCY_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'CDP_AVGWEIGHT_D',
        })
    public CDP_AVGWEIGHT_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'CDP_AUTOPRINTBLOCK_C',
        })
    public CDP_AUTOPRINTBLOCK_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CDP_FCVV_C',
        })
    public CDP_FCVV_C: string;

}
