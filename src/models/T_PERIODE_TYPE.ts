import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PERIODE_TYPE', {schema: 'dbo' } )
export class T_PERIODE_TYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PER_TYPEPER_C',
        })
    public PER_TYPEPER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PER_DESCRIPNED_C',
        })
    public PER_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PER_DESCRIPFRA_C',
        })
    public PER_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PER_USERID_C',
        })
    public PER_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PER_FLAGDELETE_C',
        })
    public PER_FLAGDELETE_C: string | null;

}
