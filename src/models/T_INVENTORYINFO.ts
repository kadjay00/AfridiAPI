import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYINFO', {schema: 'dbo' } )
export class T_INVENTORYINFO {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INI_ZONEID_N',
        })
    public INI_ZONEID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'INI_SECTORID_C',
        })
    public INI_SECTORID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'INI_DESCRIPTIONFRA_C',
        })
    public INI_DESCRIPTIONFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'INI_DESCRIPTIONNED_C',
        })
    public INI_DESCRIPTIONNED_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'INI_STARTDATE_DAT',
        })
    public INI_STARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'INI_ENDDATE_DAT',
        })
    public INI_ENDDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'INI_MODIFIEDDATE_DAT',
        })
    public INI_MODIFIEDDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'INI_LOCAL_C',
        })
    public INI_LOCAL_C: string | null;

}
