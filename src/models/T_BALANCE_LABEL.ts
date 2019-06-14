import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_LABEL', {schema: 'dbo' } )
export class T_BALANCE_LABEL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BET_BGRID_N',
        })
    public BET_BGRID_N: number;

    @Column('int', {
        nullable: true,
        name: 'BET_MAXLINES_N',
        })
    public BET_MAXLINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BET_MAXCHARSPERLINES_N',
        })
    public BET_MAXCHARSPERLINES_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BET_MAXINGREDIENTCHARS_N',
        })
    public BET_MAXINGREDIENTCHARS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BET_MAXPICTOLENGTH_N',
        })
    public BET_MAXPICTOLENGTH_N: number | null;

}
