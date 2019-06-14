import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DWORK2', {schema: 'dbo' } )
export class T_CS_DWORK2 {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CW2_REPORTID_N',
        })
    public CW2_REPORTID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CW2_FAMILY_C',
        })
    public CW2_FAMILY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CW2_SUBFAMILY_C',
        })
    public CW2_SUBFAMILY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CW2_DESCRFR_C',
        })
    public CW2_DESCRFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CW2_DESCRNL_C',
        })
    public CW2_DESCRNL_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW2_AVPVBYCOL_N',
        })
    public CW2_AVPVBYCOL_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CW2_TOTWEIGHTDILUTE_N',
        })
    public CW2_TOTWEIGHTDILUTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CW2_TOTWEIGHTPC_N',
        })
    public CW2_TOTWEIGHTPC_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_THEORVALUEDILUTE_N',
        })
    public CW2_THEORVALUEDILUTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_THEORVALUEPC_N',
        })
    public CW2_THEORVALUEPC_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'CW2_TOTHOURS_C',
        })
    public CW2_TOTHOURS_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_TOTVALUEDILUTE_N',
        })
    public CW2_TOTVALUEDILUTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_TOTVALUEPC_N',
        })
    public CW2_TOTVALUEPC_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'CW2_HOURSMON_C',
        })
    public CW2_HOURSMON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'CW2_HOURSTUE_C',
        })
    public CW2_HOURSTUE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'CW2_HOURSWED_C',
        })
    public CW2_HOURSWED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'CW2_HOURSTHU_C',
        })
    public CW2_HOURSTHU_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'CW2_HOURSFRI_C',
        })
    public CW2_HOURSFRI_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'CW2_HOURSSAT_C',
        })
    public CW2_HOURSSAT_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_DILUTEMON_N',
        })
    public CW2_DILUTEMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_DILUTETUE_N',
        })
    public CW2_DILUTETUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_DILUTEWED_N',
        })
    public CW2_DILUTEWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_DILUTETHU_N',
        })
    public CW2_DILUTETHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_DILUTEFRI_N',
        })
    public CW2_DILUTEFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_DILUTESAT_N',
        })
    public CW2_DILUTESAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_PCMON_N',
        })
    public CW2_PCMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_PCTUE_N',
        })
    public CW2_PCTUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_PCWED_N',
        })
    public CW2_PCWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_PCTHU_N',
        })
    public CW2_PCTHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_PCFRI_N',
        })
    public CW2_PCFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'CW2_PCSAT_N',
        })
    public CW2_PCSAT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CW2_PRICECURRENCY_C',
        })
    public CW2_PRICECURRENCY_C: string | null;

}
