import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_GROUPE', {schema: 'dbo' } )
export class T_BALANCE_GROUPE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BGR_ID_N',
        })
    public BGR_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'BGR_TYPE_C',
        })
    public BGR_TYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'BGR_DESCRIPTION_C',
        })
    public BGR_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BGR_INGFLAG_C',
        })
    public BGR_INGFLAG_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'BGR_CLAUSE_C',
        })
    public BGR_CLAUSE_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'BGR_OFFSET_N',
        })
    public BGR_OFFSET_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'BGR_LENGTH_N',
        })
    public BGR_LENGTH_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'bgr_lastloadok_c',
        })
    public bgr_lastloadok_c: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'bgr_startean_n',
        })
    public bgr_startean_n: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'bgr_endean_n',
        })
    public bgr_endean_n: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'bgr_lastloadok_dat',
        })
    public bgr_lastloadok_dat: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'bgr_lastfullloadok_dat',
        })
    public bgr_lastfullloadok_dat: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'bgr_labellanguage_c',
        })
    public bgr_labellanguage_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'bgr_ingrmandatory_c',
        })
    public bgr_ingrmandatory_c: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'bgr_conversion_c',
        })
    public bgr_conversion_c: string | null;

    @Column('char', {
        nullable: true,
        name: 'bgr_dlcactive_c',
        })
    public bgr_dlcactive_c: string | null;

    @Column('int', {
        nullable: true,
        name: 'bgr_defaultdlc_n',
        })
    public bgr_defaultdlc_n: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'bgr_deleteclause_c',
        })
    public bgr_deleteclause_c: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'bgr_lastnetwork_dat',
        })
    public bgr_lastnetwork_dat: Date | null;

    @Column('char', {
        nullable: true,
        name: 'BGR_EAN128_C',
        })
    public BGR_EAN128_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'BGR_MAXDELETELINES_N',
        })
    public BGR_MAXDELETELINES_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'BGR_DOWNLOADBUTCHER_C',
        })
    public BGR_DOWNLOADBUTCHER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'BGR_CASSE_N',
        })
    public BGR_CASSE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BGR_INVENTORY_N',
        })
    public BGR_INVENTORY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'BGR_SENDDRINFO_C',
        })
    public BGR_SENDDRINFO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'BGR_TRACEABILITY_C',
        })
    public BGR_TRACEABILITY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'BGR_SENDGROUPINFO_C',
        })
    public BGR_SENDGROUPINFO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'BGR_SENDCABINFO_C',
        })
    public BGR_SENDCABINFO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'BGR_DELETEALL_C',
        })
    public BGR_DELETEALL_C: string | null;

}
