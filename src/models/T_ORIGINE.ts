import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORIGINE', {schema: 'dbo' } )
@Index('IX_ORIGINE_PKINDEX', ['ORI_ORIGINE_C'], {unique: true})
export class T_ORIGINE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'ORI_ORIGINE_C',
        })
    public ORI_ORIGINE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORI_DESCRIPNED_C',
        })
    public ORI_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ORI_DESCRIPFRA_C',
        })
    public ORI_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ORI_USERID_C',
        })
    public ORI_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ori_flagdelete_C',
        })
    public ori_flagdelete_C: string | null;

}
