import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKMVTKIND', {schema: 'dbo' } )
@Index('IX_STOCKMVTKIND_CODE', ['SMK_CODE_N'])
export class T_STOCKMVTKIND {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMK_CODE_N',
        })
    public SMK_CODE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SMK_DESCRIPFRA_C',
        })
    public SMK_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SMK_DESCRIPNED_C',
        })
    public SMK_DESCRIPNED_C: string;

    @Column('int', {
        nullable: false,
        name: 'SMK_SORT_N',
        })
    public SMK_SORT_N: number;

    @Column('int', {
        nullable: true,
        name: 'SMK_GENSORT_N',
        })
    public SMK_GENSORT_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SMK_EXTRACTTYPE_C',
        })
    public SMK_EXTRACTTYPE_C: string | null;

}
