import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACTIVITE_COMPTABLE', {schema: 'dbo' } )
export class T_ACTIVITE_COMPTABLE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'ACC_ACTIVITE_C',
        })
    public ACC_ACTIVITE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ACC_DESCRIPNED_C',
        })
    public ACC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ACC_DESCRIPFRA_C',
        })
    public ACC_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACC_FLAG1_C',
        })
    public ACC_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACC_FLAG2_C',
        })
    public ACC_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACC_FLAG3_C',
        })
    public ACC_FLAG3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ACC_USERID_C',
        })
    public ACC_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ACC_FLAGDELETE_C',
        })
    public ACC_FLAGDELETE_C: string | null;

}
