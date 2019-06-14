import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PFT_MASTER', {schema: 'dbo' } )
export class T_PFT_MASTER {

    @Column('int', {
        nullable: false,
        name: 'PFM_DEPOT_N',
        })
    public PFM_DEPOT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFM_YEAR_N',
        })
    public PFM_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFM_WEEK_N',
        })
    public PFM_WEEK_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PFM_LOGISTICGROUP_C',
        })
    public PFM_LOGISTICGROUP_C: string;

    @Column('int', {
        nullable: true,
        name: 'PFM_HEADER_N',
        })
    public PFM_HEADER_N: number | null;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PFM_ORDER_DAT',
        })
    public PFM_ORDER_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PFM_CALLHOUR_C',
        })
    public PFM_CALLHOUR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PFM_VALIDHOUR_C',
        })
    public PFM_VALIDHOUR_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFM_CREATION_DAT',
        })
    public PFM_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFM_UPDATE_DAT',
        })
    public PFM_UPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFM_TRANSMISSION_DAT',
        })
    public PFM_TRANSMISSION_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'PFM_STATUS_C',
        })
    public PFM_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFM_TRANSFORMATION_DAT',
        })
    public PFM_TRANSFORMATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PFM_PRINTED_DAT',
        })
    public PFM_PRINTED_DAT: Date | null;

}
