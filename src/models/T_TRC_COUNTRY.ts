import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRC_COUNTRY', {schema: 'dbo' } )
export class T_TRC_COUNTRY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TCO_COUNTRYID_N',
        })
    public TCO_COUNTRYID_N: number;

    @Column('char', {
        nullable: false,
        name: 'TCO_DELCODE_C',
        })
    public TCO_DELCODE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'TCO_DELDATE_DAT',
        })
    public TCO_DELDATE_DAT: Date | null;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'tco_code_n',
        })
    public tco_code_n: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'tco_isocode_c',
        })
    public tco_isocode_c: string | null;

}
