import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORY', {schema: 'dbo' } )
export class T_INVENTORY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INV_INVENTORYID_N',
        })
    public INV_INVENTORYID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'INV_INVENTORYDATE_DAT',
        })
    public INV_INVENTORYDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'INV_SECTORID_C',
        })
    public INV_SECTORID_C: string;

    @Column('char', {
        nullable: false,
        name: 'INV_CADASTRE_C',
        })
    public INV_CADASTRE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'INV_MODIFIEDDATE_DAT',
        })
    public INV_MODIFIEDDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'INV_LOCAL_C',
        })
    public INV_LOCAL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'INV_CANCELED_C',
        })
    public INV_CANCELED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'INV_VALIDDATE_DAT',
        })
    public INV_VALIDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'INV_VALIDID_C',
        })
    public INV_VALIDID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'INV_INVENTORY_C',
        })
    public INV_INVENTORY_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'inv_transmitiondate_dat',
        })
    public inv_transmitiondate_dat: Date | null;

    @Column('char', {
        nullable: true,
        name: 'INV_LOGBOOK_C',
        })
    public INV_LOGBOOK_C: string | null;

}
