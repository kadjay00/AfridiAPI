import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RF_PRINTER_TYPE', {schema: 'dbo' } )
export class T_RF_PRINTER_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 25,
        name: 'RPT_TYPE_C',
        })
    public RPT_TYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'RPT_NL_C',
        })
    public RPT_NL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'RPT_FR_C',
        })
    public RPT_FR_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'RPT_SORT_N',
        })
    public RPT_SORT_N: number | null;

}
