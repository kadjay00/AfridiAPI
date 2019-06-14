import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_CONSERVATION', {schema: 'dbo' } )
export class T_BALANCE_CONSERVATION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BCO_IDNUMBER_C',
        })
    public BCO_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'BCO_OFFSET_N',
        })
    public BCO_OFFSET_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'BCO_TEMP_C',
        })
    public BCO_TEMP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'bco_ravier_c',
        })
    public bco_ravier_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'bco_travier_c',
        })
    public bco_travier_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'bco_tare_c',
        })
    public bco_tare_c: string | null;

    @Column('char', {
        nullable: true,
        name: 'bco_tracabilite_c',
        })
    public bco_tracabilite_c: string | null;

    @Column('char', {
        nullable: true,
        name: 'bco_congelation_c',
        })
    public bco_congelation_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'bco_layout_c',
        })
    public bco_layout_c: string | null;

    @Column('char', {
        nullable: true,
        name: 'BCO_DECONGELATION_C',
        })
    public BCO_DECONGELATION_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'BCO_PCTWATER_D',
        })
    public BCO_PCTWATER_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'BCO_FORMULATYPE_C',
        })
    public BCO_FORMULATYPE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 0,
        name: 'BCO_WITHDRAWINDEX_N',
        })
    public BCO_WITHDRAWINDEX_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'BCO_WITHDRAWCOEFF_D',
        })
    public BCO_WITHDRAWCOEFF_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 0,
        name: 'BCO_DRMAXINDEX_N',
        })
    public BCO_DRMAXINDEX_N: number | null;

}
