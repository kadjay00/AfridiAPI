import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMOTYPE', {schema: 'dbo' } )
@Index('IX_PROMOTYPE_PKINDEX', ['TPR_PROMOTYPE_N'], {unique: true})
export class T_PROMOTYPE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TPR_PROMOTYPE_N',
        })
    public TPR_PROMOTYPE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TPR_DESCRIPNED_C',
        })
    public TPR_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TPR_DESCRIPFRA_C',
        })
    public TPR_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TPR_USERID_C',
        })
    public TPR_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'tpr_flagdelete_C',
        })
    public tpr_flagdelete_C: string | null;

}
