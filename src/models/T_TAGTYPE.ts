import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGTYPE', {schema: 'dbo' } )
export class T_TAGTYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'TTY_FORMAT_C',
        })
    public TTY_FORMAT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TTY_DESCRIPNED_C',
        })
    public TTY_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TTY_DESCRIPFRA_C',
        })
    public TTY_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TTY_USERID_C',
        })
    public TTY_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'TTY_PAPERID_C',
        })
    public TTY_PAPERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'TTY_DWPRINT_C',
        })
    public TTY_DWPRINT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_FLAGDELETE_C',
        })
    public TTY_FLAGDELETE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_AUTOPERMIT_C',
        })
    public TTY_AUTOPERMIT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_PERMITTED_C',
        })
    public TTY_PERMITTED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_AUTOMATIC_C',
        })
    public TTY_AUTOMATIC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_RECTOVERSO_C',
        })
    public TTY_RECTOVERSO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_TRIGGERPRICE_C',
        })
    public TTY_TRIGGERPRICE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TTY_PAPERTYPE_C',
        })
    public TTY_PAPERTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'TTY_PRINTERID_C',
        })
    public TTY_PRINTERID_C: string | null;

}
