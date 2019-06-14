import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_HTSELECTION', {schema: 'dbo' } )
@Index('IX_HTSELECTION_PKINDEX', ['HTS_HANDTERMINALNBR_N', 'HTS_HTPROGRAMID_C', 'HTS_DOWNLOADDATE_DAT'], {unique: true})
export class T_HTSELECTION {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HTS_HANDTERMINALNBR_N',
        })
    public HTS_HANDTERMINALNBR_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'HTS_HTPROGRAMID_C',
        })
    public HTS_HTPROGRAMID_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'HTS_DOWNLOADDATE_DAT',
        })
    public HTS_DOWNLOADDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HTS_SELECTIONID_N',
        })
    public HTS_SELECTIONID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HTS_DETAILID_N',
        })
    public HTS_DETAILID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'HTS_USERID_C',
        })
    public HTS_USERID_C: string | null;

}
