import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PFT_MYCAD_CGEXCL', {schema: 'dbo' } )
export class T_PFT_MYCAD_CGEXCL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PCG_ACTIVITY_N',
        })
    public PCG_ACTIVITY_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PCG_CATGROUPID_C',
        })
    public PCG_CATGROUPID_C: string;

}
