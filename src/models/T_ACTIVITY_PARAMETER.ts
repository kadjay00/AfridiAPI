import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIVITY_PARAMETER', {schema: 'dbo' } )
export class T_ACTIVITY_PARAMETER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ACP_ACTIVITY_N',
        })
    public ACP_ACTIVITY_N: number;

    @Column('smallint', {
        nullable: true,
        name: 'ACP_ECOMSEQUENCE_N',
        })
    public ACP_ECOMSEQUENCE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ACP_STORAGE_C',
        })
    public ACP_STORAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ACP_MERPARTICIPATE_C',
        })
    public ACP_MERPARTICIPATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ACP_MERIFONPLANO_C',
        })
    public ACP_MERIFONPLANO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'ACP_CADPRINTWHENTABLET_C',
        })
    public ACP_CADPRINTWHENTABLET_C: string | null;

}
