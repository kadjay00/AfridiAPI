import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_ITEMS', {schema: 'dbo' } )
export class T_ECOM_ITEMS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'EIT_IDNUMBER_C',
        })
    public EIT_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'EIT_SELLINGUNIT_C',
        })
    public EIT_SELLINGUNIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'EIT_DESCRIPFRA_C',
        })
    public EIT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'EIT_DESCRIPNED_C',
        })
    public EIT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'EIT_NOMENCLATURE_C',
        })
    public EIT_NOMENCLATURE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'EIT_SUBDEPARTMENT_N',
        })
    public EIT_SUBDEPARTMENT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'EIT_TYPE_C',
        })
    public EIT_TYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EIT_CREATIONDATE_DAT',
        })
    public EIT_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EIT_UPDATEDATE_DAT',
        })
    public EIT_UPDATEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'EIT_DESCRIPFRA_LONG_C',
        })
    public EIT_DESCRIPFRA_LONG_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'EIT_DESCRIPNED_LONG_C',
        })
    public EIT_DESCRIPNED_LONG_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'EIT_TYPEPOS_C',
        })
    public EIT_TYPEPOS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'EIT_TAXCODE_C',
        })
    public EIT_TAXCODE_C: string | null;

}
