import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMDELETE', {schema: 'dbo' } )
@Index('IX_ITEMDELETE_REASCODES', ['IDD_REASONCODE1_C', 'IDD_REASONCODE2_C'])
export class T_ITEMDELETE {

    @Column('char', {
        nullable: true,
        name: 'IDD_RECORDTYPE_C',
        })
    public IDD_RECORDTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'IDD_STOREID_C',
        })
    public IDD_STOREID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IDD_REASONCODE1_C',
        })
    public IDD_REASONCODE1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IDD_REASONCODE2_C',
        })
    public IDD_REASONCODE2_C: string | null;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'IDD_IDNUMBER_C',
        })
    public IDD_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'IDD_PURCHCENTER_N',
        })
    public IDD_PURCHCENTER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'IDD_DEPARTMENT_N',
        })
    public IDD_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IDD_GIBREF_C',
        })
    public IDD_GIBREF_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IDD_LASTSALEDATE_DAT',
        })
    public IDD_LASTSALEDATE_DAT: Date | null;

}
