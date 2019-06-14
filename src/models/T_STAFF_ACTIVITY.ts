import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_ACTIVITY', {schema: 'dbo' } )
export class T_STAFF_ACTIVITY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SAC_ACTIVITY_N',
        })
    public SAC_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SAC_FUNCTION_N',
        })
    public SAC_FUNCTION_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SAC_DESCRIPNED_C',
        })
    public SAC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SAC_DESCRIPFRA_C',
        })
    public SAC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SAC_GROUP_C',
        })
    public SAC_GROUP_C: string | null;

}
