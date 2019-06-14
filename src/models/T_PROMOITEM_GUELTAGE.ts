import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMOITEM_GUELTAGE', {schema: 'dbo' } )
export class T_PROMOITEM_GUELTAGE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IPR_PROMONBR_N',
        })
    public IPR_PROMONBR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IPR_DETAILNBR_N',
        })
    public IPR_DETAILNBR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IPR_IDNUMBER_C',
        })
    public IPR_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'IPR_DEPARTMENT_N',
        })
    public IPR_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IPR_GIBREF_C',
        })
    public IPR_GIBREF_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IPR_ITEMLISTNBR_N',
        })
    public IPR_ITEMLISTNBR_N: number | null;

}
