import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FISHLABEL_SUBDEP', {schema: 'dbo' } )
export class T_FISHLABEL_SUBDEP {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FLS_SUBDEPARTMENT_N',
        })
    public FLS_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLS_A7LAYOUT_C',
        })
    public FLS_A7LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLS_A6LAYOUT_C',
        })
    public FLS_A6LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLS_A5LAYOUT_C',
        })
    public FLS_A5LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FLS_A3LAYOUT_C',
        })
    public FLS_A3LAYOUT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLS_VARWEIGHTUNIT_C',
        })
    public FLS_VARWEIGHTUNIT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'FLS_WATERMARK_C',
        })
    public FLS_WATERMARK_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FLS_PRINTCABPRICE_C',
        })
    public FLS_PRINTCABPRICE_C: string | null;

}
