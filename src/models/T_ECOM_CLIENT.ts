import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_CLIENT', {schema: 'dbo' } )
export class T_ECOM_CLIENT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 50,
        name: 'CLI_ID_C',
        })
    public CLI_ID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'CLI_LASTNAME_C',
        })
    public CLI_LASTNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CLI_FIRSTNAME_C',
        })
    public CLI_FIRSTNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CLI_ADRESS_C',
        })
    public CLI_ADRESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'CLI_CPOST_C',
        })
    public CLI_CPOST_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'CLI_VILLAGE_C',
        })
    public CLI_VILLAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CLI_BONUSCARD_C',
        })
    public CLI_BONUSCARD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'CLI_VISACARD_C',
        })
    public CLI_VISACARD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'CLI_TEL_C',
        })
    public CLI_TEL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'CLI_GSM_C',
        })
    public CLI_GSM_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'CLI_CREATIONDATE_DAT',
        })
    public CLI_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CLI_UPDATEDATE_DAT',
        })
    public CLI_UPDATEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'CLI_LANGUAGE_C',
        })
    public CLI_LANGUAGE_C: string | null;

}
