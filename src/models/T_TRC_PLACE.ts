import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TRC_PLACE', {schema: 'dbo' } )
export class T_TRC_PLACE {

    @Column('int', {
        nullable: false,
        name: 'TPC_COUNTRYID_N',
        })
    public TPC_COUNTRYID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'TPC_PLACEID_N',
        })
    public TPC_PLACEID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'TPC_EEGCODE_C',
        })
    public TPC_EEGCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'TPC_CNAME_C',
        })
    public TPC_CNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 6,
        name: 'TPC_POSTCODE_C',
        })
    public TPC_POSTCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'TPC_CITY_C',
        })
    public TPC_CITY_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'TPC_DELCODE_C',
        })
    public TPC_DELCODE_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'TPC_DELDATE_DAT',
        })
    public TPC_DELDATE_DAT: Date | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TPC_PLACETYPE_C',
        })
    public TPC_PLACETYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'tpc_code_n',
        })
    public tpc_code_n: number;

    @Column('int', {
        nullable: true,
        name: 'tpc_meattype_n',
        })
    public tpc_meattype_n: number | null;

}
