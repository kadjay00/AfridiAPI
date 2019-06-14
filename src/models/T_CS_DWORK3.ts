import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DWORK3', {schema: 'dbo' } )
export class T_CS_DWORK3 {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CW3_REPORTID_N',
        })
    public CW3_REPORTID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'CW3_TYPE_C',
        })
    public CW3_TYPE_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CW3_TOTWEIGHT_N',
        })
    public CW3_TOTWEIGHT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CW3_TOTVALUE_N',
        })
    public CW3_TOTVALUE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTWEEK_C',
        })
    public CW3_TOTWEEK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTMON_C',
        })
    public CW3_TOTMON_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTTUE_C',
        })
    public CW3_TOTTUE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTWED_C',
        })
    public CW3_TOTWED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTTHU_C',
        })
    public CW3_TOTTHU_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTFRI_C',
        })
    public CW3_TOTFRI_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CW3_TOTSAT_C',
        })
    public CW3_TOTSAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CW3_PRICECURRENCY_C',
        })
    public CW3_PRICECURRENCY_C: string | null;

}
