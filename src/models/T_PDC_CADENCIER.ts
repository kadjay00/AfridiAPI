import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_CADENCIER', {schema: 'dbo' } )
export class T_PDC_CADENCIER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'PCA_SUPPLIERID_C',
        })
    public PCA_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PCA_LOGISTICGROUP_C',
        })
    public PCA_LOGISTICGROUP_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PCA_STATE_C',
        })
    public PCA_STATE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'PCA_START_DAT',
        })
    public PCA_START_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PCA_TYPE_C',
        })
    public PCA_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_MO_N',
        })
    public PCA_MO_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_TU_N',
        })
    public PCA_TU_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_WE_N',
        })
    public PCA_WE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_TH_N',
        })
    public PCA_TH_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_FR_N',
        })
    public PCA_FR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_SA_N',
        })
    public PCA_SA_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PCA_SU_N',
        })
    public PCA_SU_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PCA_END_DAT',
        })
    public PCA_END_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PCA_ENDREASON_C',
        })
    public PCA_ENDREASON_C: string | null;

}
