import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYTYPE', {schema: 'dbo' } )
export class T_INVENTORYTYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'INT_TYPE_C',
        })
    public INT_TYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'INT_DESCRIPTIONFRA_C',
        })
    public INT_DESCRIPTIONFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'INT_DESCRIPTIONNED_C',
        })
    public INT_DESCRIPTIONNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_LOCALCREATION_C',
        })
    public INT_LOCALCREATION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_PREPINVENTORY_C',
        })
    public INT_PREPINVENTORY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_LOGBOOK_C',
        })
    public INT_LOGBOOK_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_TRANSFERTRECALAGE_C',
        })
    public INT_TRANSFERTRECALAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_CLEANUP_C',
        })
    public INT_CLEANUP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_EXPORTSAP_C',
        })
    public INT_EXPORTSAP_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'INT_EXTERN_C',
        })
    public INT_EXTERN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_EXTERNEXPORTCAT_C',
        })
    public INT_EXTERNEXPORTCAT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_EXTERNEXPORTPV_C',
        })
    public INT_EXTERNEXPORTPV_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_EXTERNTRANSMISSION_C',
        })
    public INT_EXTERNTRANSMISSION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'INT_FTPSYNC_C',
        })
    public INT_FTPSYNC_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'INT_FTPSRV_C',
        })
    public INT_FTPSRV_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'INT_FTPUSR_C',
        })
    public INT_FTPUSR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'INT_FTPPWD_C',
        })
    public INT_FTPPWD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 75,
        name: 'INT_FTPDIR_C',
        })
    public INT_FTPDIR_C: string | null;

}
