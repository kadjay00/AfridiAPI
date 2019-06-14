import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CUMULPOINTS', {schema: 'dbo' } )
@Index('IX_CUMULPOINTS_PKINDEX', ['CMP_CUMULPOINTS_N'], {unique: true})
export class T_CUMULPOINTS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CMP_CUMULPOINTS_N',
        })
    public CMP_CUMULPOINTS_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CMP_DESCRIPNED_C',
        })
    public CMP_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CMP_DESCRIPFRA_C',
        })
    public CMP_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CMP_USERID_C',
        })
    public CMP_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'cmp_flagdelete_C',
        })
    public cmp_flagdelete_C: string | null;

}
