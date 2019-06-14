import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMO_TARGETMSG', {schema: 'dbo' } )
export class T_PROMO_TARGETMSG {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PTM_PROMOTYPE_N',
        })
    public PTM_PROMOTYPE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PTM_SEQUENCE_N',
        })
    public PTM_SEQUENCE_N: number;

    @Column('smallint', {
        nullable: true,
        name: 'PTM_DETAILTYPE_N',
        })
    public PTM_DETAILTYPE_N: number | null;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PTM_DETAILITEM_N',
        })
    public PTM_DETAILITEM_N: number;

    @Column('int', {
        nullable: true,
        name: 'PTM_SUBDEPLEVEL_N',
        })
    public PTM_SUBDEPLEVEL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PTM_TARGETMSGTIMING_N',
        })
    public PTM_TARGETMSGTIMING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PTM_TARGETMSGEFFECT_N',
        })
    public PTM_TARGETMSGEFFECT_N: number | null;

}
