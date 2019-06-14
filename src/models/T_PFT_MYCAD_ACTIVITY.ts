import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PFT_MYCAD_ACTIVITY', {schema: 'dbo' } )
export class T_PFT_MYCAD_ACTIVITY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFA_ACTIVITY_N',
        })
    public PFA_ACTIVITY_N: number;

}
