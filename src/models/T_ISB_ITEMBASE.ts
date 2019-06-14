import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_ITEMBASE', {schema: 'dbo' } )
export class T_ISB_ITEMBASE {

    @Column('int', {
        nullable: true,
        name: 'IIB_ITEMDEPARTMENT_N',
        })
    public IIB_ITEMDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IIB_ITEMGIBREF_C',
        })
    public IIB_ITEMGIBREF_C: string | null;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IIB_ITEMIDNUMBER_C',
        })
    public IIB_ITEMIDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IIB_DESCRIPNED_C',
        })
    public IIB_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IIB_DESCRIPFRA_C',
        })
    public IIB_DESCRIPFRA_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'IIB_DOUGHID_N',
        })
    public IIB_DOUGHID_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 4,
        name: 'IIB_WEIGHT_N',
        })
    public IIB_WEIGHT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 4,
        name: 'IIB_ENVELOPE_N',
        })
    public IIB_ENVELOPE_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'IIB_PARTITION_N',
        })
    public IIB_PARTITION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IIB_PARTITIONCHANGE_C',
        })
    public IIB_PARTITIONCHANGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IIB_BLOCNOTION_C',
        })
    public IIB_BLOCNOTION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IIB_FLAGDELETE_C',
        })
    public IIB_FLAGDELETE_C: string | null;

}
