import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_TIMEREGISTRATION', {schema: 'dbo' } )
@Index('IX_TIMEREGISTRATION_DATMODIF', ['STR_DATMODIF_DAT'])
@Index('IX_TIMEREGISTRATION_STAFFID', ['STR_YEAR_N', 'STR_WEEKOFYEAR_N', 'STR_STAFFID_N', 'STR_PRESENCE_C'])
@Index('IX_TIMEREGISTRATION_STAFFID2', ['STR_STAFFID_N', 'STR_YEAR_N', 'STR_WEEKOFYEAR_N', 'STR_PRESENCE_C'])
export class T_STAFF_TIMEREGISTRATION {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'STR_KEYID_N',
        })
    public STR_KEYID_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'STR_STAFFID_N',
        })
    public STR_STAFFID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'STR_YEAR_N',
        })
    public STR_YEAR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'STR_WEEKOFYEAR_N',
        })
    public STR_WEEKOFYEAR_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'STR_DATE_DAT',
        })
    public STR_DATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'STR_PRESENCE_C',
        })
    public STR_PRESENCE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'STR_NBRHOURS_N',
        })
    public STR_NBRHOURS_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'STR_HOURSPAID_N',
        })
    public STR_HOURSPAID_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'STR_HOURSNPAID_N',
        })
    public STR_HOURSNPAID_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'STR_HOURSREC_N',
        })
    public STR_HOURSREC_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'STR_REASON_N',
        })
    public STR_REASON_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'STR_ACTIVITY_N',
        })
    public STR_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'STR_FUNCTION_N',
        })
    public STR_FUNCTION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'STR_FLAG1_C',
        })
    public STR_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STR_FLAG2_C',
        })
    public STR_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STR_FLAG3_C',
        })
    public STR_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STR_FLAG4_C',
        })
    public STR_FLAG4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STR_FLAG5_C',
        })
    public STR_FLAG5_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STR_MALADIE_C',
        })
    public STR_MALADIE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'STR_CERTIF_DAT',
        })
    public STR_CERTIF_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'STR_USERID_C',
        })
    public STR_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'STR_DATMODIF_DAT',
        })
    public STR_DATMODIF_DAT: Date | null;

}
