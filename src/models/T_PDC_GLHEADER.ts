import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_GLHEADER', {schema: 'dbo' } )
export class T_PDC_GLHEADER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PGH_LOGISTICGROUP_C',
        })
    public PGH_LOGISTICGROUP_C: string;

    @Column('int', {
        nullable: true,
        name: 'PGH_HEADER_N',
        })
    public PGH_HEADER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PGH_CALLHOUR_C',
        })
    public PGH_CALLHOUR_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'PGH_CADENCETYPE_C',
        })
    public PGH_CADENCETYPE_C: string | null;

}
