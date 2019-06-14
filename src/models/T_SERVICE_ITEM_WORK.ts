import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SERVICE_ITEM_WORK', {schema: 'dbo' } )
export class T_SERVICE_ITEM_WORK {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 30,
        name: 'SIW_WORKID_C',
        })
    public SIW_WORKID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SIW_IDNUMBER_C',
        })
    public SIW_IDNUMBER_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 13,
        scale: 0,
        name: 'SIW_EANCODE_N',
        })
    public SIW_EANCODE_N: number;

    @Column('int', {
        nullable: false,
        name: 'SIW_DEPARTMENT_N',
        })
    public SIW_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 7,
        name: 'SIW_GIBREF_C',
        })
    public SIW_GIBREF_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SIW_ACTIVESELLINGPRICE_D',
        })
    public SIW_ACTIVESELLINGPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'SIW_PROMO_C',
        })
    public SIW_PROMO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SIW_SELLINGUNITCODE_C',
        })
    public SIW_SELLINGUNITCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SIW_ITEMDESCRIPNED_C',
        })
    public SIW_ITEMDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SIW_ITEMDESCRIPFRA_C',
        })
    public SIW_ITEMDESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SIW_ITEMGROUP_C',
        })
    public SIW_ITEMGROUP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SIW_LOCALSUPCODE_C',
        })
    public SIW_LOCALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SIW_CENTRALSUPCODE_C',
        })
    public SIW_CENTRALSUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SIW_CENTRALSUPDATE_DAT',
        })
    public SIW_CENTRALSUPDATE_DAT: Date | null;

}
