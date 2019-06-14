import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLPROMOTYPE', {schema: 'dbo' } )
export class T_FOLPROMOTYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRO_PROMOTYPE_C',
        })
    public PRO_PROMOTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRO_DESCRIPNED_C',
        })
    public PRO_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRO_DESCRIPFRA_C',
        })
    public PRO_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PRO_USERID_C',
        })
    public PRO_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PRO_FLAGDELETE_C',
        })
    public PRO_FLAGDELETE_C: string | null;

}
