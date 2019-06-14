import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRCTLLOCAL', {schema: 'dbo' } )
@Index('IX_TRCTLLOCAL_PKINDEX', ['TLL_STOREID_C', 'TLL_INTERFACETYPE_C', 'TLL_INTERFACESUBTYPE_C', 'TLL_SESSIONNBR_N'], {unique: true})
export class T_TRCTLLOCAL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'TLL_STOREID_C',
        })
    public TLL_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'TLL_INTERFACETYPE_C',
        })
    public TLL_INTERFACETYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'TLL_INTERFACESUBTYPE_C',
        })
    public TLL_INTERFACESUBTYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TLL_SESSIONNBR_N',
        })
    public TLL_SESSIONNBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'TLL_RECORDCOUNT_N',
        })
    public TLL_RECORDCOUNT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'TLL_UPDATELOAD_C',
        })
    public TLL_UPDATELOAD_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TLL_TYPETRNSM_C',
        })
    public TLL_TYPETRNSM_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TLL_DATETRNSM_DAT',
        })
    public TLL_DATETRNSM_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'TLL_FILENAMEPOS_C',
        })
    public TLL_FILENAMEPOS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'TLL_DATEDATA_DAT',
        })
    public TLL_DATEDATA_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'TLL_ESLVALIDATION_DAT',
        })
    public TLL_ESLVALIDATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'TLL_ESLTRANSMIT_DAT',
        })
    public TLL_ESLTRANSMIT_DAT: Date | null;

}
