import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BAKEOFF_SUMMARY', {schema: 'dbo' } )
export class T_BAKEOFF_SUMMARY {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'BAS_TIMESTAMP_DAT',
        })
    public BAS_TIMESTAMP_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BAS_IDNUMBER_C',
        })
    public BAS_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICEMON_D',
        })
    public BAS_SALESPRICEMON_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICETUE_D',
        })
    public BAS_SALESPRICETUE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICEWED_D',
        })
    public BAS_SALESPRICEWED_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICETHU_D',
        })
    public BAS_SALESPRICETHU_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICEFRI_D',
        })
    public BAS_SALESPRICEFRI_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICESAT_D',
        })
    public BAS_SALESPRICESAT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BAS_SALESPRICESUN_D',
        })
    public BAS_SALESPRICESUN_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESMON_N',
        })
    public BAS_SALESMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESTUE_N',
        })
    public BAS_SALESTUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESWED_N',
        })
    public BAS_SALESWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESTHU_N',
        })
    public BAS_SALESTHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESFRI_N',
        })
    public BAS_SALESFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESSAT_N',
        })
    public BAS_SALESSAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_SALESSUN_N',
        })
    public BAS_SALESSUN_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_DELIVERED_N',
        })
    public BAS_DELIVERED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESMON_N',
        })
    public BAS_LOSSESMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESTUE_N',
        })
    public BAS_LOSSESTUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESWED_N',
        })
    public BAS_LOSSESWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESTHU_N',
        })
    public BAS_LOSSESTHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESFRI_N',
        })
    public BAS_LOSSESFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESSAT_N',
        })
    public BAS_LOSSESSAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_LOSSESSUN_N',
        })
    public BAS_LOSSESSUN_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDMON_N',
        })
    public BAS_ESTIMATEDMON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDTUE_N',
        })
    public BAS_ESTIMATEDTUE_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDWED_N',
        })
    public BAS_ESTIMATEDWED_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDTHU_N',
        })
    public BAS_ESTIMATEDTHU_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDFRI_N',
        })
    public BAS_ESTIMATEDFRI_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDSAT_N',
        })
    public BAS_ESTIMATEDSAT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BAS_ESTIMATEDSUN_N',
        })
    public BAS_ESTIMATEDSUN_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'BAS_PRICECURRENCY_C',
        })
    public BAS_PRICECURRENCY_C: string | null;

}
