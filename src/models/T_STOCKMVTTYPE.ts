import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKMVTTYPE', {schema: 'dbo' } )
export class T_STOCKMVTTYPE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMT_CODE_N',
        })
    public SMT_CODE_N: number;

    @Column('int', {
        nullable: false,
        name: 'SMT_MVTKIND_N',
        })
    public SMT_MVTKIND_N: number;

    @Column('int', {
        nullable: false,
        name: 'SMT_SIGN_N',
        })
    public SMT_SIGN_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SMT_DESCRIPFRA_C',
        })
    public SMT_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SMT_DESCRIPNED_C',
        })
    public SMT_DESCRIPNED_C: string;

    @Column('int', {
        nullable: false,
        name: 'SMT_SORT_N',
        })
    public SMT_SORT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SMT_RFDESCRIPFRA_C',
        })
    public SMT_RFDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SMT_RFDESCRIPNED_C',
        })
    public SMT_RFDESCRIPNED_C: string | null;

}
