import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMDELETED', {schema: 'dbo' } )
export class T_ITEMDELETED {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IDT_IDNUMBER_C',
        })
    public IDT_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'IDT_DELETE_DAT',
        })
    public IDT_DELETE_DAT: Date | null;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'IDT_DESCR_C',
        })
    public IDT_DESCR_C: string;

    @Column('int', {
        nullable: true,
        name: 'IDT_DEPARTMENT_N',
        })
    public IDT_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IDT_GIBREF_C',
        })
    public IDT_GIBREF_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IDT_LASTSALEDATE_DAT',
        })
    public IDT_LASTSALEDATE_DAT: Date | null;

}
