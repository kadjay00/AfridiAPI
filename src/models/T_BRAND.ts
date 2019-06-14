import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BRAND', {schema: 'dbo' } )
@Index('IX_BRAND_PKINDEX', ['BRD_BRAND_C'], {unique: true})
export class T_BRAND {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'BRD_BRAND_C',
        })
    public BRD_BRAND_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'BRD_DESCRIPNED_C',
        })
    public BRD_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'BRD_DESCRIPFRA_C',
        })
    public BRD_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_FLAG1_C',
        })
    public BRD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_FLAG2_C',
        })
    public BRD_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_FLAG3_C',
        })
    public BRD_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_FLAG4_C',
        })
    public BRD_FLAG4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'BRD_USERID_C',
        })
    public BRD_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'brd_flagdelete_C',
        })
    public brd_flagdelete_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_SPOTTERHEADERCODE_C',
        })
    public BRD_SPOTTERHEADERCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_PDCROUNDMODE_C',
        })
    public BRD_PDCROUNDMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_PDCNEEDRECEPTION_C',
        })
    public BRD_PDCNEEDRECEPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_FACINGUPDATEMODE_C',
        })
    public BRD_FACINGUPDATEMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_HORFACINGCALCMODE_C',
        })
    public BRD_HORFACINGCALCMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_VERTFACINGCALCMODE_C',
        })
    public BRD_VERTFACINGCALCMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_PROFFACINGCALCMODE_C',
        })
    public BRD_PROFFACINGCALCMODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_UPDATEABLEFACINGS_C',
        })
    public BRD_UPDATEABLEFACINGS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_UPDATEABLECVLA_C',
        })
    public BRD_UPDATEABLECVLA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_UPDATEABLEIDCOMMANDE_C',
        })
    public BRD_UPDATEABLEIDCOMMANDE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_RFID_C',
        })
    public BRD_RFID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'BRD_DEFFISHLOGO_C',
        })
    public BRD_DEFFISHLOGO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_BLOCKFISHLOGO_C',
        })
    public BRD_BLOCKFISHLOGO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BRD_MDDSLIM_C',
        })
    public BRD_MDDSLIM_C: string | null;

    @Column('char', {
        nullable: true,
        length: 2,
        name: 'BRD_CATGROUP_C',
        })
    public BRD_CATGROUP_C: string | null;

}
