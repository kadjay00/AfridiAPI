import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYSECTOR', {schema: 'dbo' } )
export class T_INVENTORYSECTOR {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'INS_SECTORID_C',
        })
    public INS_SECTORID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'INS_DESCRIPTIONFRA_C',
        })
    public INS_DESCRIPTIONFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'INS_DESCRIPTIONNED_C',
        })
    public INS_DESCRIPTIONNED_C: string;

    @Column('int', {
        nullable: false,
        name: 'INS_PERIOD_N',
        })
    public INS_PERIOD_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'INS_MODIFIEDDATE_DAT',
        })
    public INS_MODIFIEDDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'INS_LOCAL_C',
        })
    public INS_LOCAL_C: string | null;

}
