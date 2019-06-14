import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PERIODEPARAMETER', {schema: 'dbo' } )
export class T_PERIODEPARAMETER {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PEP_PERIODEFOODNONFOOD_C',
        })
    public PEP_PERIODEFOODNONFOOD_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PEP_CMDISPROP_C',
        })
    public PEP_CMDISPROP_C: string | null;

}
