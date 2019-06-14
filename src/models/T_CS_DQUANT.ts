import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DQUANT', {schema: 'dbo' } )
export class T_CS_DQUANT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CDQ_REPORTID_N',
        })
    public CDQ_REPORTID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'CDQ_IDNUMBER_C',
        })
    public CDQ_IDNUMBER_C: string;

    @Column('char', {
        nullable: true,
        name: 'CDQ_PREFIXCODE_C',
        })
    public CDQ_PREFIXCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'CDQ_PROMOTIONCODE_C',
        })
    public CDQ_PROMOTIONCODE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'CDQ_COEFFICIENT_N',
        })
    public CDQ_COEFFICIENT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CDQ_SELLINGPRICE_N',
        })
    public CDQ_SELLINGPRICE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CDQ_DESCRNL_C',
        })
    public CDQ_DESCRNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CDQ_DESCRFR_C',
        })
    public CDQ_DESCRFR_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'CDQ_PROPQUANT_N',
        })
    public CDQ_PROPQUANT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CDQ_PRICECURRENCY_C',
        })
    public CDQ_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CDQ_FCVV_C',
        })
    public CDQ_FCVV_C: string;

}
