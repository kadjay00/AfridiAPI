import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDCITEM_HISTO', {schema: 'dbo' } )
export class T_PDCITEM_HISTO {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PDI_PDCNUMBER_N',
        })
    public PDI_PDCNUMBER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PDI_IDNUMBER_C',
        })
    public PDI_IDNUMBER_C: string;

    @Column('char', {
        nullable: true,
        name: 'PDI_VARTYPE_C',
        })
    public PDI_VARTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDI_IDGESTION_C',
        })
    public PDI_IDGESTION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDI_ITEMINTRO_DAT',
        })
    public PDI_ITEMINTRO_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDI_CENTRALSUPDATE_DAT',
        })
    public PDI_CENTRALSUPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDI_LOCALSUPDATE_DAT',
        })
    public PDI_LOCALSUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PDI_SELLINGUNITCODE_C',
        })
    public PDI_SELLINGUNITCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDI_AVERAGESALE_D',
        })
    public PDI_AVERAGESALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDI_REALSALE_D',
        })
    public PDI_REALSALE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PDI_STOCK_D',
        })
    public PDI_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PDI_QTYCOEFF_D',
        })
    public PDI_QTYCOEFF_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'PDI_EANCODE_N',
        })
    public PDI_EANCODE_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDI_LASTSALEDATE_DAT',
        })
    public PDI_LASTSALEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PDI_USERID_C',
        })
    public PDI_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PDI_MODIFIED_DAT',
        })
    public PDI_MODIFIED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PDI_GROUP_C',
        })
    public PDI_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PDI_ACTIVITY_N',
        })
    public PDI_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PDI_SUBDEPARTMENT_N',
        })
    public PDI_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDI_SALESGROUP_C',
        })
    public PDI_SALESGROUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDI_SALESFAMILY_C',
        })
    public PDI_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PDI_SALESSUBFAMILY_C',
        })
    public PDI_SALESSUBFAMILY_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PDI_QTYQUANTIFIED_D',
        })
    public PDI_QTYQUANTIFIED_D: number | null;

}
