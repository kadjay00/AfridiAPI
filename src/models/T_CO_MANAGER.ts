import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_MANAGER', {schema: 'dbo' } )
export class T_CO_MANAGER {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'COM_EXCEPTIONDATE_DAT',
        })
    public COM_EXCEPTIONDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'COM_MANAGER_N',
        })
    public COM_MANAGER_N: number;

    @Column('char', {
        nullable: false,
        name: 'COM_STATE_C',
        })
    public COM_STATE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'COM_CHANGEUSER_C',
        })
    public COM_CHANGEUSER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'COM_CHANGEDATE_DAT',
        })
    public COM_CHANGEDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'COM_VALIDATIONUSER_C',
        })
    public COM_VALIDATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'COM_VALIDATIONDATE_DAT',
        })
    public COM_VALIDATIONDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'COM_VALIDATIONTOOL_C',
        })
    public COM_VALIDATIONTOOL_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'COM_NEWARTICLESTOTAL_N',
        })
    public COM_NEWARTICLESTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_NEWARTICLESTREATED_N',
        })
    public COM_NEWARTICLESTREATED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_ZEROSTOCKTOTAL_N',
        })
    public COM_ZEROSTOCKTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_ZEROSTOCKTREATED_N',
        })
    public COM_ZEROSTOCKTREATED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_NEGATIVESTOCKTOTAL_N',
        })
    public COM_NEGATIVESTOCKTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_NEGATIVESTOCKTREATED_N',
        })
    public COM_NEGATIVESTOCKTREATED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_LOTID_N',
        })
    public COM_LOTID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'COM_LOCKEDUSER_C',
        })
    public COM_LOCKEDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'COM_LOCKEDDATE_DAT',
        })
    public COM_LOCKEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'COM_LOCKEDPDT_C',
        })
    public COM_LOCKEDPDT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'COM_ZEROSTOCKTREATEDAUTO_N',
        })
    public COM_ZEROSTOCKTREATEDAUTO_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_NEGATIVESTOCKTREATEDAUTO_N',
        })
    public COM_NEGATIVESTOCKTREATEDAUTO_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_ABNORMALSTOCKTOTAL_N',
        })
    public COM_ABNORMALSTOCKTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_ABNORMALSTOCKTREATED_N',
        })
    public COM_ABNORMALSTOCKTREATED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_REMOVEDARTICLESTOTAL_N',
        })
    public COM_REMOVEDARTICLESTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_REMOVEDARTICLESTREATED_N',
        })
    public COM_REMOVEDARTICLESTREATED_N: number | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'COM_ORIGINE_C',
        })
    public COM_ORIGINE_C: string;

    @Column('int', {
        nullable: true,
        name: 'COM_NEWARTICLESTREATEDAUTO_N',
        })
    public COM_NEWARTICLESTREATEDAUTO_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_ABNORMALSTOCKTREATEDAUTO_N',
        })
    public COM_ABNORMALSTOCKTREATEDAUTO_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'COM_REMOVEDARTICLESTREATEDAUTO_N',
        })
    public COM_REMOVEDARTICLESTREATEDAUTO_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'COM_FIRSTUSER_C',
        })
    public COM_FIRSTUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'COM_FIRSTDATE_DAT',
        })
    public COM_FIRSTDATE_DAT: Date | null;

}
