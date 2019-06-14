import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_PFT_STOCK', {schema: 'dbo' } )
export class T_SPY_PFT_STOCK {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_USERID',
        })
    public SPY_USERID: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_WORKSTATION',
        })
    public SPY_WORKSTATION: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SPY_APPLICATION',
        })
    public SPY_APPLICATION: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_DATE_DAT',
        })
    public SPY_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPY_SOURCE_C',
        })
    public SPY_SOURCE_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SPY_IDNUMBERINPUT_C',
        })
    public SPY_IDNUMBERINPUT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SPY_IDNUMBER_C',
        })
    public SPY_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPY_IDGESTION_C',
        })
    public SPY_IDGESTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPY_IDVARPROMO_C',
        })
    public SPY_IDVARPROMO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_HASPROMOVAR_C',
        })
    public SPY_HASPROMOVAR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_ISPROMOVAR_C',
        })
    public SPY_ISPROMOVAR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPY_DESCRIPNED_C',
        })
    public SPY_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPY_DESCRIPFRA_C',
        })
    public SPY_DESCRIPFRA_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SPY_DEPT_N',
        })
    public SPY_DEPT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPY_SDEPT_N',
        })
    public SPY_SDEPT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SPY_GIBREF_C',
        })
    public SPY_GIBREF_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SPY_QTYCOEFF_D',
        })
    public SPY_QTYCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'SPY_SHIPUNIT_D',
        })
    public SPY_SHIPUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'SPY_STOCKARTDB_D',
        })
    public SPY_STOCKARTDB_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'SPY_STOCKARTRF_D',
        })
    public SPY_STOCKARTRF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'SPY_STOCKARTRFGLOB_D',
        })
    public SPY_STOCKARTRFGLOB_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'SPY_STOCKDBNEW_D',
        })
    public SPY_STOCKDBNEW_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 3,
        name: 'SPY_CONSUMPTIONUNIT_D',
        })
    public SPY_CONSUMPTIONUNIT_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_CSUPCODE_C',
        })
    public SPY_CSUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_CSUPDATE_DAT',
        })
    public SPY_CSUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_LSUPCODE_C',
        })
    public SPY_LSUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_LSUPDATE_DAT',
        })
    public SPY_LSUPDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_INOUTCODE_C',
        })
    public SPY_INOUTCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_ARTLINKTYPE_C',
        })
    public SPY_ARTLINKTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_CADTYPECALC_C',
        })
    public SPY_CADTYPECALC_C: string | null;

}
