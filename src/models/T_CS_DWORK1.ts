import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DWORK1', {schema: 'dbo' } )
export class T_CS_DWORK1 {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CW1_REPORTID_N',
        })
    public CW1_REPORTID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CW1_FAMILY_C',
        })
    public CW1_FAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CW1_SUBFAMILY_C',
        })
    public CW1_SUBFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'CW1_REFART_C',
        })
    public CW1_REFART_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CW1_REFDESCRFR_C',
        })
    public CW1_REFDESCRFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CW1_REFDESCRNL_C',
        })
    public CW1_REFDESCRNL_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'CW1_INTERV_N',
        })
    public CW1_INTERV_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CW1_WEIGHT_N',
        })
    public CW1_WEIGHT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW1_VALUEPV_N',
        })
    public CW1_VALUEPV_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_CODEPC_C',
        })
    public CW1_CODEPC_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCMON_N',
        })
    public CW1_PCMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCTUE_N',
        })
    public CW1_PCTUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCWED_N',
        })
    public CW1_PCWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCTHU_N',
        })
    public CW1_PCTHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCFRI_N',
        })
    public CW1_PCFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCSAT_N',
        })
    public CW1_PCSAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_PCTOT_N',
        })
    public CW1_PCTOT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERMON_N',
        })
    public CW1_ORDERMON_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_ORDERCODEMON_C',
        })
    public CW1_ORDERCODEMON_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERTUE_N',
        })
    public CW1_ORDERTUE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_ORDERCODETUE_C',
        })
    public CW1_ORDERCODETUE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERWED_N',
        })
    public CW1_ORDERWED_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_ORDERCODEWED_C',
        })
    public CW1_ORDERCODEWED_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERTHU_N',
        })
    public CW1_ORDERTHU_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_ORDERCODETHU_C',
        })
    public CW1_ORDERCODETHU_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERFRI_N',
        })
    public CW1_ORDERFRI_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_ORDERCODEFRI_C',
        })
    public CW1_ORDERCODEFRI_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERSAT_N',
        })
    public CW1_ORDERSAT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'CW1_ORDERCODESAT_C',
        })
    public CW1_ORDERCODESAT_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW1_ORDERTOT_N',
        })
    public CW1_ORDERTOT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CW1_PRICECURRENCY_C',
        })
    public CW1_PRICECURRENCY_C: string | null;

}
