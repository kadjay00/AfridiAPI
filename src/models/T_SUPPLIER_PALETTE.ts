import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_PALETTE', {schema: 'dbo' } )
export class T_SUPPLIER_PALETTE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SPL_PALETTEID_C',
        })
    public SPL_PALETTEID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 13,
        name: 'SPL_SUPPLIERID_C',
        })
    public SPL_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'SPL_ARSKEY_C',
        })
    public SPL_ARSKEY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPL_ARSDEPOT_C',
        })
    public SPL_ARSDEPOT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'SPL_ARSRECIPIENT_C',
        })
    public SPL_ARSRECIPIENT_C: string | null;

}
