import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MIGRATE_PLS_SAP_SDEP', {schema: 'dbo' } )
export class T_MIGRATE_PLS_SAP_SDEP {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MSD_SUBDEPARTMENT_N',
        })
    public MSD_SUBDEPARTMENT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'MSD_MIGRATION_DAT',
        })
    public MSD_MIGRATION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MSD_FLAG1_C',
        })
    public MSD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MSD_FLAG2_C',
        })
    public MSD_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MSD_FLAG3_C',
        })
    public MSD_FLAG3_C: string | null;

}
