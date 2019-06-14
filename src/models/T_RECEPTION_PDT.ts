import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_PDT', {schema: 'dbo' } )
export class T_RECEPTION_PDT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'REP_REPRISE_N',
        })
    public REP_REPRISE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'REP_PDTNR_C',
        })
    public REP_PDTNR_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 18,
        name: 'REP_RECEPTION_C',
        })
    public REP_RECEPTION_C: string;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'REP_RECEPTION2_C',
        })
    public REP_RECEPTION2_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'REP_COMMENT_C',
        })
    public REP_COMMENT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'REP_TRANSFER_DAT',
        })
    public REP_TRANSFER_DAT: Date | null;

    @Column('datetime', {
        nullable: false,
        name: 'REP_PDT_DAT',
        })
    public REP_PDT_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'REP_ERRORCODE_C',
        })
    public REP_ERRORCODE_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'REP_USERID_C',
        })
    public REP_USERID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'REP_CREATIONDATE_DAT',
        })
    public REP_CREATIONDATE_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'REP_UPDATEDATE_DAT',
        })
    public REP_UPDATEDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'REP_STATUS_C',
        })
    public REP_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REP_TYPE_C',
        })
    public REP_TYPE_C: string | null;

}
