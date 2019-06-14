import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_HEADER', {schema: 'dbo' } )
export class T_SPOTTER_HEADER {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'SPH_CODE_C',
        })
    public SPH_CODE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SPH_FORMAT_C',
        })
    public SPH_FORMAT_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SPH_LAYOUT_C',
        })
    public SPH_LAYOUT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPH_NED_C',
        })
    public SPH_NED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPH_FRA_C',
        })
    public SPH_FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPH_TWT_C',
        })
    public SPH_TWT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPH_BIL_C',
        })
    public SPH_BIL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPH_TYPE_C',
        })
    public SPH_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPH_BRAND_C',
        })
    public SPH_BRAND_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPH_ACTIVE_C',
        })
    public SPH_ACTIVE_C: string | null;

}
