import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGDETAIL_LABEL', {schema: 'dbo' } )
export class T_TAGDETAIL_LABEL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'TDL_DETAILID_N',
        })
    public TDL_DETAILID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'TDL_LANCODE_C',
        })
    public TDL_LANCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 120,
        name: 'TDL_DESCR_C',
        })
    public TDL_DESCR_C: string | null;

}
