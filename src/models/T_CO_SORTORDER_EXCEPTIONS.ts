import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_SORTORDER_EXCEPTIONS', {schema: 'dbo' } )
export class T_CO_SORTORDER_EXCEPTIONS {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'COO_ORIGINE_C',
        })
    public COO_ORIGINE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'COO_EXCEPTION_STATUS_C',
        })
    public COO_EXCEPTION_STATUS_C: string;

    @Column('tinyint', {
        nullable: false,
        name: 'COO_SORTORDER_N',
        })
    public COO_SORTORDER_N: number;

    @Column('char', {
        nullable: false,
        name: 'COO_STORE_C',
        })
    public COO_STORE_C: string;

    @Column('char', {
        nullable: false,
        name: 'COO_DEPOT_C',
        })
    public COO_DEPOT_C: string;

    @Column('smallint', {
        nullable: false,
        name: 'COO_REAPPEARANCE_N',
        })
    public COO_REAPPEARANCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'COO_DESCRIPTIONNL_C',
        })
    public COO_DESCRIPTIONNL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'COO_DESCRIPTIONFR_C',
        })
    public COO_DESCRIPTIONFR_C: string | null;

}
