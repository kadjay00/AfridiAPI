import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDERTYPE', {schema: 'dbo' } )
export class T_ORDERTYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'ORT_ORDERTYPE_C',
        })
    public ORT_ORDERTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORT_DESCRIPFRA_C',
        })
    public ORT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORT_DESCRIPNED_C',
        })
    public ORT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORT_USERID_C',
        })
    public ORT_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORT_FLAGDELETE_C',
        })
    public ORT_FLAGDELETE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORT_FLAGDIRECT_C',
        })
    public ORT_FLAGDIRECT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORT_PLANNINGLINKED_C',
        })
    public ORT_PLANNINGLINKED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORT_AUTOCONFIRM_AFTERCOPY_C',
        })
    public ORT_AUTOCONFIRM_AFTERCOPY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ORT_PROBLEMWHENCANNOTBEORDERED_C',
        })
    public ORT_PROBLEMWHENCANNOTBEORDERED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ORT_SHORTDESCRIPFRA_C',
        })
    public ORT_SHORTDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ORT_SHORTDESCRIPNED_C',
        })
    public ORT_SHORTDESCRIPNED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'ORT_AUTOCLOSE_N',
        })
    public ORT_AUTOCLOSE_N: number | null;

}
