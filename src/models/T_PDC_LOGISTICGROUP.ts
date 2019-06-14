import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_LOGISTICGROUP', {schema: 'dbo' } )
export class T_PDC_LOGISTICGROUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'GRL_LOGISTICGROUP_C',
        })
    public GRL_LOGISTICGROUP_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'GRL_DESCRIPFRA_C',
        })
    public GRL_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'GRL_DESCRIPNED_C',
        })
    public GRL_DESCRIPNED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'GRL_INCLUDENEXTDELIV_C',
        })
    public GRL_INCLUDENEXTDELIV_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'GRL_INDUSER_C',
        })
    public GRL_INDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'GRL_INDMODIF_DAT',
        })
    public GRL_INDMODIF_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'GRL_HEADER_N',
        })
    public GRL_HEADER_N: number | null;

}
