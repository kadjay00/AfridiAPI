import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGDETAIL', {schema: 'dbo' } )
export class T_TAGDETAIL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'TDE_DETAILID_N',
        })
    public TDE_DETAILID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'TDE_IDNUMBER_C',
        })
    public TDE_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'TDE_TITLECODE_C',
        })
    public TDE_TITLECODE_C: string;

    @Column('int', {
        nullable: true,
        name: 'TDE_SEQUENCE_N',
        })
    public TDE_SEQUENCE_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'TDE_INFIDEN_N',
        })
    public TDE_INFIDEN_N: number | null;

}
