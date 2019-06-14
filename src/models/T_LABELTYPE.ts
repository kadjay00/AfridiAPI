import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LABELTYPE', {schema: 'dbo' } )
export class T_LABELTYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'LBT_LABELTYPE_C',
        })
    public LBT_LABELTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBT_DESCRIPNED_C',
        })
    public LBT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'LBT_DESCRIPFRA_C',
        })
    public LBT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'LBT_USERID_C',
        })
    public LBT_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'LBT_PAPERID_C',
        })
    public LBT_PAPERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'LBT_DWPRINT_C',
        })
    public LBT_DWPRINT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_FLAGDELETE_C',
        })
    public LBT_FLAGDELETE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_AUTOPERMIT_C',
        })
    public LBT_AUTOPERMIT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_PERMITTED_C',
        })
    public LBT_PERMITTED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_AUTOMATIC_C',
        })
    public LBT_AUTOMATIC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_RECTOVERSO_C',
        })
    public LBT_RECTOVERSO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_TRIGGERPRICE_C',
        })
    public LBT_TRIGGERPRICE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_PAPERTYPE_C',
        })
    public LBT_PAPERTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LBT_PRINTERID_C',
        })
    public LBT_PRINTERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_REMOVEIO_C',
        })
    public LBT_REMOVEIO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_TRIGGERPRICEVISIBLE_C',
        })
    public LBT_TRIGGERPRICEVISIBLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_UPDATEABLE_C',
        })
    public LBT_UPDATEABLE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'LBT_SELECTABLE_C',
        })
    public LBT_SELECTABLE_C: string | null;

}
