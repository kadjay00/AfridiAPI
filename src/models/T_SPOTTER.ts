import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPOTTER', {schema: 'dbo' } )
@Index('IX_SPOTTER_GIBREF', ['SPO_DEPARTMENT_N', 'SPO_GIBREF_C'])
@Index('IX_SPOTTER_STARTDATE', ['SPO_STARTDATE_DAT'])
export class T_SPOTTER {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'SPO_SPOTTER_N',
        })
    public SPO_SPOTTER_N: number;

    @Column('int', {
        nullable: true,
        name: 'SPO_YEAR_N',
        })
    public SPO_YEAR_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_TYPEPER_C',
        })
    public SPO_TYPEPER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_PERIODE_N',
        })
    public SPO_PERIODE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_DEPARTMENT_N',
        })
    public SPO_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SPO_GIBREF_C',
        })
    public SPO_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPO_IDNUMBER_C',
        })
    public SPO_IDNUMBER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_ACTIVITY_N',
        })
    public SPO_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_SUBDEPARTMENT_N',
        })
    public SPO_SUBDEPARTMENT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_SORT1_N',
        })
    public SPO_SORT1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_SORT2_N',
        })
    public SPO_SORT2_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_SORT3_N',
        })
    public SPO_SORT3_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SPO_LAYOUT_C',
        })
    public SPO_LAYOUT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 24,
        name: 'SPO_TITLE1FRA_C',
        })
    public SPO_TITLE1FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 24,
        name: 'SPO_TITLE2FRA_C',
        })
    public SPO_TITLE2FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 24,
        name: 'SPO_TITLE1NED_C',
        })
    public SPO_TITLE1NED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 24,
        name: 'SPO_TITLE2NED_C',
        })
    public SPO_TITLE2NED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR1FRA_C',
        })
    public SPO_DESCR1FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR2FRA_C',
        })
    public SPO_DESCR2FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR3FRA_C',
        })
    public SPO_DESCR3FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR4FRA_C',
        })
    public SPO_DESCR4FRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR1NED_C',
        })
    public SPO_DESCR1NED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR2NED_C',
        })
    public SPO_DESCR2NED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR3NED_C',
        })
    public SPO_DESCR3NED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SPO_DESCR4NED_C',
        })
    public SPO_DESCR4NED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPO_STARTDATE_DAT',
        })
    public SPO_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPO_ENDDATE_DAT',
        })
    public SPO_ENDDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_SALESPRICE_D',
        })
    public SPO_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_PROMOPRICE_D',
        })
    public SPO_PROMOPRICE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_MULTI1_N',
        })
    public SPO_MULTI1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_MULTI2_N',
        })
    public SPO_MULTI2_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SPO_SELLINGUNITCODE_C',
        })
    public SPO_SELLINGUNITCODE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_NBRPOINTS_N',
        })
    public SPO_NBRPOINTS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_SURXQUANT_N',
        })
    public SPO_SURXQUANT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'SPO_PAKKINGFRA_C',
        })
    public SPO_PAKKINGFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 12,
        name: 'SPO_PAKKINGNED_C',
        })
    public SPO_PAKKINGNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SPO_SALESFAM_C',
        })
    public SPO_SALESFAM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SPO_SALESSUBFAM_C',
        })
    public SPO_SALESSUBFAM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_S4260_C',
        })
    public SPO_S4260_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_CABPRICE_D',
        })
    public SPO_CABPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPO_CABDESCRFRA_C',
        })
    public SPO_CABDESCRFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SPO_CABDESCRNED_C',
        })
    public SPO_CABDESCRNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SPO_CURRENCY_C',
        })
    public SPO_CURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_LOCAL_C',
        })
    public SPO_LOCAL_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_SALESPRICE_EURO_D',
        })
    public SPO_SALESPRICE_EURO_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_PROMOPRICE_EURO_D',
        })
    public SPO_PROMOPRICE_EURO_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'SPO_MULTI1_EURO_N',
        })
    public SPO_MULTI1_EURO_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_CABPRICE_EURO_D',
        })
    public SPO_CABPRICE_EURO_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPO_PRINTDATE_DAT',
        })
    public SPO_PRINTDATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_ORIGINALPRICE_D',
        })
    public SPO_ORIGINALPRICE_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'SPO_PRINTEDPRICECODE_N',
        })
    public SPO_PRINTEDPRICECODE_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPO_CREATION_DAT',
        })
    public SPO_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SPO_UPDATEDUSER_C',
        })
    public SPO_UPDATEDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPO_UPDATED_DAT',
        })
    public SPO_UPDATED_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'SPO_ORIGINALCABPRICE_D',
        })
    public SPO_ORIGINALCABPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPO_ORIGINALCABFRA_C',
        })
    public SPO_ORIGINALCABFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPO_ORIGINALCABNED_C',
        })
    public SPO_ORIGINALCABNED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_PRINTNORMALPRICE_C',
        })
    public SPO_PRINTNORMALPRICE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_CREATEDMANUAL_C',
        })
    public SPO_CREATEDMANUAL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_VIDANGEINFO_C',
        })
    public SPO_VIDANGEINFO_C: string | null;

}
