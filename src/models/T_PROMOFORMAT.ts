import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMOFORMAT', {schema: 'dbo' } )
export class T_PROMOFORMAT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFO_PROMOTYPE_N',
        })
    public PFO_PROMOTYPE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PFO_PROMOTYPEPOS_N',
        })
    public PFO_PROMOTYPEPOS_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'PFO_DECIMALS_N',
        })
    public PFO_DECIMALS_N: number;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'PFO_UNITNED_C',
        })
    public PFO_UNITNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 10,
        name: 'PFO_UNITFRA_C',
        })
    public PFO_UNITFRA_C: string;

}
