import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACCGROUP', {schema: 'dbo' } )
export class T_ACCGROUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'ACC_ACCOUNTID_C',
        })
    public ACC_ACCOUNTID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ACC_DESCRIPNED_C',
        })
    public ACC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ACC_DESCRIPFRA_C',
        })
    public ACC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'ACC_ACCOUNT_C',
        })
    public ACC_ACCOUNT_C: string | null;

}
