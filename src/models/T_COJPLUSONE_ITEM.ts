import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COJPLUSONE_ITEM', {schema: 'dbo' } )
export class T_COJPLUSONE_ITEM {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CJI_ID_N',
        })
    public CJI_ID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'CJI_IDNUMBER_C',
        })
    public CJI_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        length: 8,
        name: 'CJI_IDGESTION_C',
        })
    public CJI_IDGESTION_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CJI_STOCK_D',
        })
    public CJI_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'CJI_QTYCOEFF_D',
        })
    public CJI_QTYCOEFF_D: number | null;

}
