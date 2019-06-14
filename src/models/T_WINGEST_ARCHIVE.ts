import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_WINGEST_ARCHIVE', {schema: 'dbo' } )
export class T_WINGEST_ARCHIVE {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'INA_INVENTORYDATE_DAT',
        })
    public INA_INVENTORYDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'INA_SECTORID_C',
        })
    public INA_SECTORID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INA_SUBDEPARTMENT_N',
        })
    public INA_SUBDEPARTMENT_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'INA_TAXCODE_C',
        })
    public INA_TAXCODE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'INA_TAXPERCENTAGE_D',
        })
    public INA_TAXPERCENTAGE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'INA_PRICETTC_D',
        })
    public INA_PRICETTC_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'INA_COSTPRICE_D',
        })
    public INA_COSTPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'INA_PROFIT_D',
        })
    public INA_PROFIT_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'INA_TOTSEQUENCERP_N',
        })
    public INA_TOTSEQUENCERP_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'INA_TOTREFERENCE_N',
        })
    public INA_TOTREFERENCE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'INA_TOTVIDANGE_N',
        })
    public INA_TOTVIDANGE_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 3,
        name: 'INA_PRICEHT_D',
        })
    public INA_PRICEHT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'INA_PRICECURRENCY_C',
        })
    public INA_PRICECURRENCY_C: string | null;

}
