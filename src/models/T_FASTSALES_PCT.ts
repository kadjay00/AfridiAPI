import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FASTSALES_PCT', {schema: 'dbo' } )
export class T_FASTSALES_PCT {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'FAP_ID_N',
        })
    public FAP_ID_N: number;

    @Column('char', {
        nullable: false,
        name: 'FAP_TYPE_C',
        })
    public FAP_TYPE_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 5,
        scale: 3,
        name: 'FAP_PCT_D',
        })
    public FAP_PCT_D: number;

    @Column('int', {
        nullable: false,
        name: 'FAP_RFLABEL_N',
        })
    public FAP_RFLABEL_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'FAP_DESCRIP_C',
        })
    public FAP_DESCRIP_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'FAP_SORTOL_N',
        })
    public FAP_SORTOL_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FAP_SORTRF_N',
        })
    public FAP_SORTRF_N: number;

}
