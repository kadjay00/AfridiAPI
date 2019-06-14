import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CATEGORY', {schema: 'dbo' } )
@Index('IX_CATEGORY_PKINDEX', ['CAT_CATEGORY_C'], {unique: true})
export class T_CATEGORY {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CAT_CATEGORY_C',
        })
    public CAT_CATEGORY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAT_DESCRIPNED_C',
        })
    public CAT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CAT_DESCRIPFRA_C',
        })
    public CAT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CAT_USERID_C',
        })
    public CAT_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'cat_flagdelete_C',
        })
    public cat_flagdelete_C: string | null;

}
