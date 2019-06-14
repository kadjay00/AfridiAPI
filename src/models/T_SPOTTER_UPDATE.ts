import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_UPDATE', {schema: 'dbo' } )
export class T_SPOTTER_UPDATE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SPU_LAYOUT_C',
        })
    public SPU_LAYOUT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SPU_DWEDIT_C',
        })
    public SPU_DWEDIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SPU_DWINSERT_C',
        })
    public SPU_DWINSERT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATELAYOUT_C',
        })
    public SPU_UPDATELAYOUT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEPERIODE_C',
        })
    public SPU_UPDATEPERIODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATETITLES_C',
        })
    public SPU_UPDATETITLES_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEDESCRIPS_C',
        })
    public SPU_UPDATEDESCRIPS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATESALESPRICE_C',
        })
    public SPU_UPDATESALESPRICE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEPROMOPRICE_C',
        })
    public SPU_UPDATEPROMOPRICE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATECABPRICE_C',
        })
    public SPU_UPDATECABPRICE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATECABUNIT_C',
        })
    public SPU_UPDATECABUNIT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEHEADER_C',
        })
    public SPU_UPDATEHEADER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_DEFAULTHEADER_C',
        })
    public SPU_DEFAULTHEADER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEPACKING_C',
        })
    public SPU_UPDATEPACKING_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATETITLE1_C',
        })
    public SPU_UPDATETITLE1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATETITLE2_C',
        })
    public SPU_UPDATETITLE2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEDESCRIP1_C',
        })
    public SPU_UPDATEDESCRIP1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEDESCRIP2_C',
        })
    public SPU_UPDATEDESCRIP2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEDESCRIP3_C',
        })
    public SPU_UPDATEDESCRIP3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPU_UPDATEDESCRIP4_C',
        })
    public SPU_UPDATEDESCRIP4_C: string | null;

}
