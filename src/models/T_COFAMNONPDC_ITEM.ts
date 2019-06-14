import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COFAMNONPDC_ITEM', {schema: 'dbo' } )
export class T_COFAMNONPDC_ITEM {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'COI_ID_N',
        })
    public COI_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'COI_IDNUMBER_C',
        })
    public COI_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'COI_IDGESTION_C',
        })
    public COI_IDGESTION_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'COI_STOCK_D',
        })
    public COI_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'COI_QTYCOEFF_D',
        })
    public COI_QTYCOEFF_D: number | null;

}
