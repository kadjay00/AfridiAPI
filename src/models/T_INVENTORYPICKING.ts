import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYPICKING', {schema: 'dbo' } )
export class T_INVENTORYPICKING {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INP_INVENTORYID_N',
        })
    public INP_INVENTORYID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'INP_LOCATIONFROM_N',
        })
    public INP_LOCATIONFROM_N: number;

    @Column('int', {
        nullable: false,
        name: 'INP_LOCATIONTO_N',
        })
    public INP_LOCATIONTO_N: number;

    @Column('char', {
        nullable: true,
        name: 'INP_PVMANDATORY_C',
        })
    public INP_PVMANDATORY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'INP_LABEL_C',
        })
    public INP_LABEL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'INP_LABELPRINTED_C',
        })
    public INP_LABELPRINTED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'INP_VALUE1_C',
        })
    public INP_VALUE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'INP_VALUE2_C',
        })
    public INP_VALUE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'INP_VALUE3_C',
        })
    public INP_VALUE3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'INP_VALUE4_C',
        })
    public INP_VALUE4_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'INP_VALUE5_C',
        })
    public INP_VALUE5_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'INP_MODIFIEDDATE_DAT',
        })
    public INP_MODIFIEDDATE_DAT: Date | null;

}
