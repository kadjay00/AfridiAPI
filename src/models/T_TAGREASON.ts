import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGREASON', {schema: 'dbo' } )
export class T_TAGREASON {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TRE_REASON_C',
        })
    public TRE_REASON_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TRE_DESCRIPNED_C',
        })
    public TRE_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TRE_DESCRIPFRA_C',
        })
    public TRE_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TRE_AUTOMATIC_C',
        })
    public TRE_AUTOMATIC_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TRE_FLAGDELETE_C',
        })
    public TRE_FLAGDELETE_C: string | null;

}
