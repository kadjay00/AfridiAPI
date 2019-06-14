import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDERANALYSE', {schema: 'dbo' } )
export class T_FOLDERANALYSE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'FOL_IDNUMBER_C',
        })
    public FOL_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FOL_SELLINGUNITCODE_C',
        })
    public FOL_SELLINGUNITCODE_C: string | null;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FOL_START_DAT',
        })
    public FOL_START_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'FOL_END_DAT',
        })
    public FOL_END_DAT: Date;

    @Column('tinyint', {
        nullable: false,
        name: 'FOL_WEEK_N',
        })
    public FOL_WEEK_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'FOL_YEAR_N',
        })
    public FOL_YEAR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'FOL_FOLDERTYPE_C',
        })
    public FOL_FOLDERTYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FOL_FOLDERLINK_C',
        })
    public FOL_FOLDERLINK_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOL_INSERT_DAT',
        })
    public FOL_INSERT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOL_UPDATE_DAT',
        })
    public FOL_UPDATE_DAT: Date | null;

}
