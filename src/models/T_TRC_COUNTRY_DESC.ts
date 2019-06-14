import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRC_COUNTRY_DESC', {schema: 'dbo' } )
export class T_TRC_COUNTRY_DESC {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TCD_LABELLANG_C',
        })
    public TCD_LABELLANG_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TCD_COUNTRYID_N',
        })
    public TCD_COUNTRYID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'TCD_COUNTRY_DESC_C',
        })
    public TCD_COUNTRY_DESC_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'tcd_code_n',
        })
    public tcd_code_n: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'tcd_isocode_c',
        })
    public tcd_isocode_c: string | null;

}
