import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_DOUGHCOMPOSITION', {schema: 'dbo' } )
export class T_ISB_DOUGHCOMPOSITION {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'IDC_DOUGHID_N',
        })
    public IDC_DOUGHID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IDC_INGRDEPARTMENT_N',
        })
    public IDC_INGRDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 7,
        name: 'IDC_INGRGIBREF_C',
        })
    public IDC_INGRGIBREF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IDC_INGRIDNUMBER_C',
        })
    public IDC_INGRIDNUMBER_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 4,
        name: 'IDC_QUANTITY_N',
        })
    public IDC_QUANTITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IDC_FLAGDELETE_C',
        })
    public IDC_FLAGDELETE_C: string | null;

}
