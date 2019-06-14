import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEAUDIT_PRELOAD_CRIT', {schema: 'dbo' } )
export class T_PRICEAUDIT_PRELOAD_CRIT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PPC_ID_N',
        })
    public PPC_ID_N: number;

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'PPC_SEQUENCE_N',
        })
    public PPC_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PPC_GROUP_C',
        })
    public PPC_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PPC_DEPORACTFR_N',
        })
    public PPC_DEPORACTFR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PPC_DEPORACTTO_N',
        })
    public PPC_DEPORACTTO_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PPC_SUBDEPARTMENTFR_N',
        })
    public PPC_SUBDEPARTMENTFR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PPC_SUBDEPARTMENTTO_N',
        })
    public PPC_SUBDEPARTMENTTO_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PPC_SALESFAMILYFR_C',
        })
    public PPC_SALESFAMILYFR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PPC_SALESFAMILYTO_C',
        })
    public PPC_SALESFAMILYTO_C: string | null;

}
