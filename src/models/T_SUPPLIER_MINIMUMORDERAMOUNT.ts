import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_MINIMUMORDERAMOUNT', {schema: 'dbo' } )
export class T_SUPPLIER_MINIMUMORDERAMOUNT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'SMA_SUPPLIERID_C',
        })
    public SMA_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'SMA_CADENCETYPE_C',
        })
    public SMA_CADENCETYPE_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SMA_MINIMUMAMOUNT_D',
        })
    public SMA_MINIMUMAMOUNT_D: number | null;

}
