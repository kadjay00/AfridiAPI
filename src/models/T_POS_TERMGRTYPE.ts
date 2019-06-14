import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_TERMGRTYPE', {schema: 'dbo' } )
export class T_POS_TERMGRTYPE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TGT_TYPEID_N',
        })
    public TGT_TYPEID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'TGT_DESCRIPTION_C',
        })
    public TGT_DESCRIPTION_C: string | null;

}
