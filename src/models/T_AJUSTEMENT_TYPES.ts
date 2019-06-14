import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_AJUSTEMENT_TYPES', {schema: 'dbo' } )
export class T_AJUSTEMENT_TYPES {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'AJT_CODE_N',
        })
    public AJT_CODE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'AJT_DESCRIPFRA_C',
        })
    public AJT_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'AJT_DESCRIPNED_C',
        })
    public AJT_DESCRIPNED_C: string;

}
