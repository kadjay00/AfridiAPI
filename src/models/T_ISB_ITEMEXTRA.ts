import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_ITEMEXTRA', {schema: 'dbo' } )
export class T_ISB_ITEMEXTRA {

    @Column('int', {
        nullable: true,
        name: 'IIE_ITEMDEPARTMENT_N',
        })
    public IIE_ITEMDEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IIE_ITEMGIBREF_C',
        })
    public IIE_ITEMGIBREF_C: string | null;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IIE_ITEMIDNUMBER_C',
        })
    public IIE_ITEMIDNUMBER_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IIE_INGRDEPARTMENT_N',
        })
    public IIE_INGRDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 7,
        name: 'IIE_INGRGIBREF_C',
        })
    public IIE_INGRGIBREF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IIE_INGRIDNUMBER_C',
        })
    public IIE_INGRIDNUMBER_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 7,
        scale: 4,
        name: 'IIE_QUANTITY_N',
        })
    public IIE_QUANTITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'IIE_FLAGDELETE_C',
        })
    public IIE_FLAGDELETE_C: string | null;

}
