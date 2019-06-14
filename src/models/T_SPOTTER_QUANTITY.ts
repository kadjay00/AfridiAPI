import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER_QUANTITY', {schema: 'dbo' } )
export class T_SPOTTER_QUANTITY {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SPQ_SPOTTER_N',
        })
    public SPQ_SPOTTER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'SPQ_FORMAT_C',
        })
    public SPQ_FORMAT_C: string;

    @Column('int', {
        nullable: true,
        name: 'SPQ_QUANTITY_N',
        })
    public SPQ_QUANTITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SPQ_RECTOVERSO_C',
        })
    public SPQ_RECTOVERSO_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SPQ_ORIQUANTITY_N',
        })
    public SPQ_ORIQUANTITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SPQ_TYPE_C',
        })
    public SPQ_TYPE_C: string | null;

}
