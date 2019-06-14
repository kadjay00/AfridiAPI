import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELFSCAN_PROMO_RECOVERY', {schema: 'dbo' } )
export class T_SELFSCAN_PROMO_RECOVERY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SPR_SESSION_N',
        })
    public SPR_SESSION_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SPR_RECORD_N',
        })
    public SPR_RECORD_N: number;

    @Column('int', {
        nullable: true,
        name: 'SPR_PROMONBR_N',
        })
    public SPR_PROMONBR_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPR_SESSIONDATE_DAT',
        })
    public SPR_SESSIONDATE_DAT: Date | null;

}
