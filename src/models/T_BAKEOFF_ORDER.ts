import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BAKEOFF_ORDER', {schema: 'dbo' } )
export class T_BAKEOFF_ORDER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BAO_ID_N',
        })
    public BAO_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'BAO_SUPPLIERID_C',
        })
    public BAO_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'BAO_ORDERNUMBER_C',
        })
    public BAO_ORDERNUMBER_C: string | null;

}
