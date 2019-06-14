import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_DW', {schema: 'dbo' } )
export class T_SPOTTER_DW {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SPW_VERSION_C',
        })
    public SPW_VERSION_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SPW_LAYOUT_C',
        })
    public SPW_LAYOUT_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SPW_FORMAT_C',
        })
    public SPW_FORMAT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPW_DESCRIPNED_C',
        })
    public SPW_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPW_DESCRIPFRA_C',
        })
    public SPW_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPW_DWPRINT_C',
        })
    public SPW_DWPRINT_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'SPW_PAPERID_C',
        })
    public SPW_PAPERID_C: string;

    @Column('char', {
        nullable: false,
        name: 'SPW_AUTOMATIC_C',
        })
    public SPW_AUTOMATIC_C: string;

    @Column('char', {
        nullable: false,
        name: 'SPW_RECTOVERSO_C',
        })
    public SPW_RECTOVERSO_C: string;

    @Column('char', {
        nullable: true,
        name: 'SPW_PAPERTYPE_C',
        })
    public SPW_PAPERTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPW_PRINTERID_C',
        })
    public SPW_PRINTERID_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'SPW_REMOVEIO_C',
        })
    public SPW_REMOVEIO_C: string;

    @Column('int', {
        nullable: false,
        name: 'SPW_DEFAULTQUANTITY_N',
        })
    public SPW_DEFAULTQUANTITY_N: number;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPW_LAYOUTVERSION_C',
        })
    public SPW_LAYOUTVERSION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPW_PRINTPARAMENABLED_C',
        })
    public SPW_PRINTPARAMENABLED_C: string | null;

}
