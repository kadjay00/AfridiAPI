import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INVENTORYAUDIT', {schema: 'dbo' } )
export class T_INVENTORYAUDIT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'IAU_TYPE_C',
        })
    public IAU_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IAU_IDX_N',
        })
    public IAU_IDX_N: number;

    @Column('numeric', {
        nullable: true,
        precision: 8,
        scale: 4,
        name: 'IAU_NUMVAL_D',
        })
    public IAU_NUMVAL_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'IAU_TXTVAL_C',
        })
    public IAU_TXTVAL_C: string | null;

}
