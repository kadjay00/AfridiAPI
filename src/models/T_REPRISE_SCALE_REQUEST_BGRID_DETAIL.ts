import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_SCALE_REQUEST_BGRID_DETAIL', {schema: 'dbo' } )
export class T_REPRISE_SCALE_REQUEST_BGRID_DETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RSD_ID_N',
        })
    public RSD_ID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'RSD_BGRID_N',
        })
    public RSD_BGRID_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'RSD_FILENR_N',
        })
    public RSD_FILENR_N: number;

    @Column('varchar', {
        nullable: false,
        name: 'RSD_NAME_C',
        })
    public RSD_NAME_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'RSD_SIZEKB_D',
        })
    public RSD_SIZEKB_D: number;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'RSD_STATE_C',
        })
    public RSD_STATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RSD_START_DAT',
        })
    public RSD_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'RSD_END_DAT',
        })
    public RSD_END_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'RSD_PLUCOUNT_N',
        })
    public RSD_PLUCOUNT_N: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'RSD_MSG_C',
        })
    public RSD_MSG_C: string | null;

}
