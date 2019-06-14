import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TURNOVER_SDEP', {schema: 'dbo' } )
export class T_TURNOVER_SDEP {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'TUS_ACCDATE_DAT',
        })
    public TUS_ACCDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TUS_SUBDEPARTMENT_N',
        })
    public TUS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'TUS_PRICECURRENCY_C',
        })
    public TUS_PRICECURRENCY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALWTAX_N',
        })
    public TUS_TOTALWTAX_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALTAX_N',
        })
    public TUS_TOTALTAX_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALRED_N',
        })
    public TUS_TOTALRED_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALBRUT_N',
        })
    public TUS_TOTALBRUT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_PROMOWTAX_D',
        })
    public TUS_PROMOWTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 3,
        name: 'TUS_TOTALPF_D',
        })
    public TUS_TOTALPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTAL2_D',
        })
    public TUS_TOTAL2_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALA_D',
        })
    public TUS_TOTALA_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALB_D',
        })
    public TUS_TOTALB_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALC_D',
        })
    public TUS_TOTALC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALD_D',
        })
    public TUS_TOTALD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALE_D',
        })
    public TUS_TOTALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALG_D',
        })
    public TUS_TOTALG_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALH_D',
        })
    public TUS_TOTALH_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALM_D',
        })
    public TUS_TOTALM_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALP_D',
        })
    public TUS_TOTALP_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALR_D',
        })
    public TUS_TOTALR_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALT_D',
        })
    public TUS_TOTALT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALX_D',
        })
    public TUS_TOTALX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALZ_D',
        })
    public TUS_TOTALZ_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_PROMOWTAX_LOCAL_D',
        })
    public TUS_PROMOWTAX_LOCAL_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_TOTALI_D',
        })
    public TUS_TOTALI_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'TUS_PROMOWTAX_CENTRAL_D',
        })
    public TUS_PROMOWTAX_CENTRAL_D: number | null;

}
