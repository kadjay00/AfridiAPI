import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEAUDIT_COMPETITOR', {schema: 'dbo' } )
export class T_PRICEAUDIT_COMPETITOR {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'PAC_COMPETITOR_C',
        })
    public PAC_COMPETITOR_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'PAC_NAMENL_C',
        })
    public PAC_NAMENL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'PAC_NAMEFR_C',
        })
    public PAC_NAMEFR_C: string;

}
