import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COFAMNONPDC_LINE', {schema: 'dbo' } )
export class T_COFAMNONPDC_LINE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'COL_ID_N',
        })
    public COL_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'COL_IDNUMBER_C',
        })
    public COL_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'COL_GLOBALSTOCK_D',
        })
    public COL_GLOBALSTOCK_D: number | null;

}
