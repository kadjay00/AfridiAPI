import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKLOT_RF', {schema: 'dbo' } )
@Index('IX_STOCKLOT_RF_STATMVTKIND', ['SLM_STATUS_C', 'SLM_MVTKIND_N'])
export class T_STOCKLOT_RF {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SLM_ID_N',
        })
    public SLM_ID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'SLM_CREAT_DAT',
        })
    public SLM_CREAT_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'SLM_EFFECT_DAT',
        })
    public SLM_EFFECT_DAT: Date;

    @Column('char', {
        nullable: false,
        name: 'SLM_STATUS_C',
        })
    public SLM_STATUS_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'SLM_STATUSMOD_DAT',
        })
    public SLM_STATUSMOD_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 32,
        name: 'SLM_SOURCEID_C',
        })
    public SLM_SOURCEID_C: string;

    @Column('int', {
        nullable: false,
        name: 'SLM_MVTKIND_N',
        })
    public SLM_MVTKIND_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SLM_USERID_C',
        })
    public SLM_USERID_C: string;

    @Column('char', {
        nullable: true,
        name: 'SLM_FLAG1_C',
        })
    public SLM_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SLM_FLAG2_C',
        })
    public SLM_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SLM_FLAG3_C',
        })
    public SLM_FLAG3_C: string | null;

}
