import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LOCALSALES_PCT', {schema: 'dbo' } )
export class T_LOCALSALES_PCT {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'LOP_ID_N',
        })
    public LOP_ID_N: number;

    @Column('char', {
        nullable: false,
        name: 'LOP_TYPE_C',
        })
    public LOP_TYPE_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 5,
        scale: 3,
        name: 'LOP_PCT_N',
        })
    public LOP_PCT_N: number;

    @Column('int', {
        nullable: false,
        name: 'LOP_RFLABEL_N',
        })
    public LOP_RFLABEL_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'LOP_DESCRIPFRA_C',
        })
    public LOP_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'LOP_DESCRIPNED_C',
        })
    public LOP_DESCRIPNED_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'LOP_SORTOL_N',
        })
    public LOP_SORTOL_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'LOP_SORTRF_N',
        })
    public LOP_SORTRF_N: number;

}
