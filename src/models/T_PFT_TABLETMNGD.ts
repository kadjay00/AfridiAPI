import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PFT_TABLETMNGD', {schema: 'dbo' } )
export class T_PFT_TABLETMNGD {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFT_YEAR_N',
        })
    public PFT_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFT_WEEK_N',
        })
    public PFT_WEEK_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFT_ACTIVITY_N',
        })
    public PFT_ACTIVITY_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PFT_ORDER_DAT',
        })
    public PFT_ORDER_DAT: Date;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PFT_DELIVERYDATE_DAT',
        })
    public PFT_DELIVERYDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFT_HEADER_N',
        })
    public PFT_HEADER_N: number;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PFT_TABLETMNGD_C',
        })
    public PFT_TABLETMNGD_C: string | null;

    @Column('datetime', {
        nullable: false,
        name: 'PFT_CREATION_DAT',
        })
    public PFT_CREATION_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'PFT_UPDATE_DAT',
        })
    public PFT_UPDATE_DAT: Date;

}
