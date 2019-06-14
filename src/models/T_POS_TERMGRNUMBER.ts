import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_TERMGRNUMBER', {schema: 'dbo' } )
export class T_POS_TERMGRNUMBER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TGN_NUMBERID_N',
        })
    public TGN_NUMBERID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'TGN_DESCRIPTION_C',
        })
    public TGN_DESCRIPTION_C: string | null;

}
