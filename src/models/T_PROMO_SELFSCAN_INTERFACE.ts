import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMO_SELFSCAN_INTERFACE', {schema: 'dbo' } )
export class T_PROMO_SELFSCAN_INTERFACE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PSI_PROMOTYPE_N',
        })
    public PSI_PROMOTYPE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'PSI_CONDITIONCARD_C',
        })
    public PSI_CONDITIONCARD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'PSI_CONDITIONTICKET_C',
        })
    public PSI_CONDITIONTICKET_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PSI_COUPON_C',
        })
    public PSI_COUPON_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PSI_GUELTAGE_C',
        })
    public PSI_GUELTAGE_C: string | null;

}
