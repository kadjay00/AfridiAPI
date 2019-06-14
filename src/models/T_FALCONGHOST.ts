import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FALCONGHOST', {schema: 'dbo' } )
export class T_FALCONGHOST {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 30,
        name: 'TFG_FALCONCLASS_C',
        })
    public TFG_FALCONCLASS_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 30,
        name: 'TFG_FALCONPART_C',
        })
    public TFG_FALCONPART_C: string;

    @Column('varchar', {
        nullable: false,
        name: 'TFG_FALCONGHOST_C',
        })
    public TFG_FALCONGHOST_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'TFG_FALCONFOLDERSID_N',
        })
    public TFG_FALCONFOLDERSID_N: number;

}
