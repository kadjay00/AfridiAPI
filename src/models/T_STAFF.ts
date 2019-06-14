import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF', {schema: 'dbo' } )
@Index('IX_STAFF_MALADIE', ['STA_MALADIE_C'])
export class T_STAFF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'STA_STAFFID_N',
        })
    public STA_STAFFID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'STA_IDNUMBER_C',
        })
    public STA_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_LASTNAME_C',
        })
    public STA_LASTNAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_FIRSTNAME_C',
        })
    public STA_FIRSTNAME_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STA_LANGUAGE_C',
        })
    public STA_LANGUAGE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STA_SEXCODE_C',
        })
    public STA_SEXCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'STA_BIRTHDATE_DAT',
        })
    public STA_BIRTHDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_ADDRESS_C',
        })
    public STA_ADDRESS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'STA_POSTALCODE_C',
        })
    public STA_POSTALCODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_PLACE_C',
        })
    public STA_PLACE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'STA_STARTDATE_DAT',
        })
    public STA_STARTDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'STA_FLAG1_C',
        })
    public STA_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STA_FLAG2_C',
        })
    public STA_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STA_FLAG3_C',
        })
    public STA_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STA_FLAG4_C',
        })
    public STA_FLAG4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STA_FLAG5_C',
        })
    public STA_FLAG5_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_MUTUELLE_C',
        })
    public STA_MUTUELLE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_MUTUELLEID_C',
        })
    public STA_MUTUELLEID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_SOCIALSEC_C',
        })
    public STA_SOCIALSEC_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'STA_HOURSREC_N',
        })
    public STA_HOURSREC_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'STA_CONGE_N',
        })
    public STA_CONGE_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'STA_MALADIE_C',
        })
    public STA_MALADIE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'STA_MALADIE_DAT',
        })
    public STA_MALADIE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'STA_CIVILSTATE_C',
        })
    public STA_CIVILSTATE_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'STA_NBRCHILD_N',
        })
    public STA_NBRCHILD_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'STA_PARTNER_C',
        })
    public STA_PARTNER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'STA_RAISON_C',
        })
    public STA_RAISON_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'STA_STARTMAL_DAT',
        })
    public STA_STARTMAL_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'STA_MALRAISON_N',
        })
    public STA_MALRAISON_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'STA_HOURSHOL_N',
        })
    public STA_HOURSHOL_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'STA_FLEXIBILITE_C',
        })
    public STA_FLEXIBILITE_C: string | null;

}
