import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CENTRALEAN', {schema: 'dbo' } )
export class T_CENTRALEAN {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'F2_SEQUENCENBR_N',
        })
    public F2_SEQUENCENBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'F2_SESSIONNBR_N',
        })
    public F2_SESSIONNBR_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'F2_IDNUMBER_C',
        })
    public F2_IDNUMBER_C: string | null;

    @Column('numeric', {
        nullable: false,
        precision: 13,
        scale: 0,
        name: 'F2_EANCODE_N',
        })
    public F2_EANCODE_N: number;

    @Column('int', {
        nullable: true,
        name: 'F2_DEPARTMENT_N',
        })
    public F2_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'F2_GIBREF_C',
        })
    public F2_GIBREF_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'F2_CENTRALSUPDATE_DAT',
        })
    public F2_CENTRALSUPDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'F2_CENTRALSUPCODE_C',
        })
    public F2_CENTRALSUPCODE_C: string | null;

}
