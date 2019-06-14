import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE', {schema: 'dbo' } )
export class T_BALANCE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BAL_ID_N',
        })
    public BAL_ID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BAL_BGRID_N',
        })
    public BAL_BGRID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'BAL_TYPE_C',
        })
    public BAL_TYPE_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'BAL_BRAND_C',
        })
    public BAL_BRAND_C: string;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'BAL_IP_C',
        })
    public BAL_IP_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'BAL_DESCRIPTION_C',
        })
    public BAL_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'BAL_SN_C',
        })
    public BAL_SN_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'BAL_PORT_N',
        })
    public BAL_PORT_N: number | null;

}
