import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STORESLIST', {schema: 'dbo' } )
export class T_STORESLIST {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'STL_STOREID_C',
        })
    public STL_STOREID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STL_COMPANYNAME_C',
        })
    public STL_COMPANYNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STL_STORENAME_C',
        })
    public STL_STORENAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STL_ADDRESS_C',
        })
    public STL_ADDRESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STL_POSTALCODE_C',
        })
    public STL_POSTALCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STL_PLACE_C',
        })
    public STL_PLACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STL_STORETYPE_C',
        })
    public STL_STORETYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STL_TELEPHONE_C',
        })
    public STL_TELEPHONE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STL_TELEFAX_C',
        })
    public STL_TELEFAX_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STL_LANGUAGECODE_C',
        })
    public STL_LANGUAGECODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STL_FRANCHISE_C',
        })
    public STL_FRANCHISE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'STL_ENSEIGNE_N',
        })
    public STL_ENSEIGNE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'STL_ENSEIGNE_C',
        })
    public STL_ENSEIGNE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STL_FLAGDELETE_C',
        })
    public STL_FLAGDELETE_C: string | null;

}
