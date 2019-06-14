import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMOCONDITIONCARD', {schema: 'dbo' } )
export class T_PROMOCONDITIONCARD {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PCC_CONDITIONCARD_N',
        })
    public PCC_CONDITIONCARD_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'PCC_DESCRIPNED_C',
        })
    public PCC_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'PCC_DESCRIPFRA_C',
        })
    public PCC_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PCC_FLAGDELETE_C',
        })
    public PCC_FLAGDELETE_C: string | null;

}
