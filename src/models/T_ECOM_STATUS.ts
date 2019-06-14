import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_STATUS', {schema: 'dbo' } )
export class T_ECOM_STATUS {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'ECS_STATUS_C',
        })
    public ECS_STATUS_C: string;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'ECS_DESCRIPTIONNL_C',
        })
    public ECS_DESCRIPTIONNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'ECS_DESCRIPTIONFR_C',
        })
    public ECS_DESCRIPTIONFR_C: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'ECS_RUPTURESORT_N',
        })
    public ECS_RUPTURESORT_N: number | null;

}
