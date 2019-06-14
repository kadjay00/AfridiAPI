import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_KPI_DEADSTOCK_REGR', {schema: 'dbo' } )
export class T_KPI_DEADSTOCK_REGR {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'KDS_KEY_N',
        })
    public KDS_KEY_N: number;

    @Column('int', {
        nullable: false,
        name: 'KDS_LEVEL_N',
        })
    public KDS_LEVEL_N: number;

    @Column('int', {
        nullable: false,
        name: 'KDS_YEAR_N',
        })
    public KDS_YEAR_N: number;

    @Column('int', {
        nullable: false,
        name: 'KDS_WEEK_N',
        })
    public KDS_WEEK_N: number;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'KDS_GROUP_C',
        })
    public KDS_GROUP_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'KDS_ACTIVITY_N',
        })
    public KDS_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'KDS_SUBDEPARTMENT_N',
        })
    public KDS_SUBDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'KDS_SALESFAMILY_C',
        })
    public KDS_SALESFAMILY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'KDS_CIRCUIT_C',
        })
    public KDS_CIRCUIT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'KDS_PCT_D',
        })
    public KDS_PCT_D: number | null;

}
