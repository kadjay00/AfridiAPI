import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_DOUGHS', {schema: 'dbo' } )
export class T_ISB_DOUGHS {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'IDO_DOUGHID_N',
        })
    public IDO_DOUGHID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IDO_DESCRIPNED_C',
        })
    public IDO_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IDO_DESCRIPFRA_C',
        })
    public IDO_DESCRIPFRA_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'IDO_MOLDCAPACITY_N',
        })
    public IDO_MOLDCAPACITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IDO_MOLDCAPACITYCHANGE_C',
        })
    public IDO_MOLDCAPACITYCHANGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IDO_FLAGDELETE_C',
        })
    public IDO_FLAGDELETE_C: string | null;

}
