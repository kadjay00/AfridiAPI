import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CODEORIGINE', {schema: 'dbo' } )
@Index('IX_CODEORIGINE_PKINDEX', ['COR_CODEORIGINE_N'], {unique: true})
export class T_CODEORIGINE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'COR_CODEORIGINE_N',
        })
    public COR_CODEORIGINE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'COR_DESCRIPNED_C',
        })
    public COR_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'COR_DESCRIPFRA_C',
        })
    public COR_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'COR_USERID_C',
        })
    public COR_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'cor_flagdelete_C',
        })
    public cor_flagdelete_C: string | null;

}
