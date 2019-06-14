import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_PRINT', {schema: 'dbo' } )
export class T_SPOTTER_PRINT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // cale:0,
        name: 'SPP_PRINTID_N',
        })
    public SPP_PRINTID_N: number;

    @Column('numeric', {
        nullable: false,
        scale: 0,
        name: 'SPP_SPOTTERID_N',
        })
    public SPP_SPOTTERID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'SPP_FORMAT_C',
        })
    public SPP_FORMAT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SPP_WORKID_C',
        })
    public SPP_WORKID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'SPP_PRINTDW_C',
        })
    public SPP_PRINTDW_C: string;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SPP_PAPERID_C',
        })
    public SPP_PAPERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPP_RECTOVERSO_C',
        })
    public SPP_RECTOVERSO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPP_SORT_C',
        })
    public SPP_SORT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SPP_COLOR_N',
        })
    public SPP_COLOR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPP_HEADERCOLOR_N',
        })
    public SPP_HEADERCOLOR_N: number | null;

}
