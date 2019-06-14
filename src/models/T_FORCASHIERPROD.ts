import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORCASHIERPROD', {schema: 'dbo' } )
export class T_FORCASHIERPROD {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FAP_CUSTOMERS_N',
        })
    public FAP_CUSTOMERS_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FAP_CASHIERS_N',
        })
    public FAP_CASHIERS_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 5,
        scale: 2,
        name: 'FAP_MAXRATE_D',
        })
    public FAP_MAXRATE_D: number;

}
