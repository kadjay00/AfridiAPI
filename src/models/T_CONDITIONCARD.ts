import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CONDITIONCARD', {schema: 'dbo' } )
export class T_CONDITIONCARD {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CCD_CONDITIONCARD_N',
        })
    public CCD_CONDITIONCARD_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CCD_DESCRIPNED_C',
        })
    public CCD_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CCD_DESCRIPFRA_C',
        })
    public CCD_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CCD_USERID_C',
        })
    public CCD_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ccd_flagdelete_C',
        })
    public ccd_flagdelete_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARDREQUIRED_N',
        })
    public CCD_ABACUS_CARDREQUIRED_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_ALLCARDS_N',
        })
    public CCD_ABACUS_ALLCARDS_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD1_N',
        })
    public CCD_ABACUS_CARD1_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD2_N',
        })
    public CCD_ABACUS_CARD2_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD3_N',
        })
    public CCD_ABACUS_CARD3_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD4_N',
        })
    public CCD_ABACUS_CARD4_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD5_N',
        })
    public CCD_ABACUS_CARD5_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD6_N',
        })
    public CCD_ABACUS_CARD6_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD7_N',
        })
    public CCD_ABACUS_CARD7_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD8_N',
        })
    public CCD_ABACUS_CARD8_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD9_N',
        })
    public CCD_ABACUS_CARD9_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_CARD10_N',
        })
    public CCD_ABACUS_CARD10_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'CCD_ABACUS_SEGMENT_N',
        })
    public CCD_ABACUS_SEGMENT_N: number | null;

}
