import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYINFOVALUE', {schema: 'dbo' } )
export class T_INVENTORYINFOVALUE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INO_ZONEID_N',
        })
    public INO_ZONEID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'INO_SECTORID_C',
        })
    public INO_SECTORID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'INO_VALUEID_C',
        })
    public INO_VALUEID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'INO_DESCRIPTIONFRA_C',
        })
    public INO_DESCRIPTIONFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'INO_DESCRIPTIONNED_C',
        })
    public INO_DESCRIPTIONNED_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'INO_STARTDATE_DAT',
        })
    public INO_STARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'INO_ENDDATE_DAT',
        })
    public INO_ENDDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'INO_MODIFIEDDATE_DAT',
        })
    public INO_MODIFIEDDATE_DAT: Date | null;

}
