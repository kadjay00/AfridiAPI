import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_NS_BRAND', {schema: 'dbo' } )
export class T_NS_BRAND {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'NSB_BRAND_C',
        })
    public NSB_BRAND_C: string;

}
