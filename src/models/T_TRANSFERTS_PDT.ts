import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRANSFERTS_PDT', {schema: 'dbo' } )
export class T_TRANSFERTS_PDT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TRP_REPRISE_N',
        })
    public TRP_REPRISE_N: number;

    @Column('char', {
        nullable: true,
        name: 'TRP_TYPE_C',
        })
    public TRP_TYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TRP_REPRISE_DAT',
        })
    public TRP_REPRISE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'TRP_PDTNR_C',
        })
    public TRP_PDTNR_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'TRP_DOCNUMBER_N',
        })
    public TRP_DOCNUMBER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TRP_USERID_C',
        })
    public TRP_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TRP_LASTMOD_DAT',
        })
    public TRP_LASTMOD_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'TRP_STATUS_C',
        })
    public TRP_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TRP_IMPORT_DAT',
        })
    public TRP_IMPORT_DAT: Date | null;

}
