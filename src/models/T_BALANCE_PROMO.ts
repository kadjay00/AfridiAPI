import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_PROMO', {schema: 'dbo' } )
export class T_BALANCE_PROMO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'TBP_IDNUMBER_C',
        })
    public TBP_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'TBP_PROMOPRICE_D',
        })
    public TBP_PROMOPRICE_D: number;

}
