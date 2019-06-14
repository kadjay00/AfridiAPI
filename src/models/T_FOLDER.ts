import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOLDER', {schema: 'dbo' } )
@Index('IX_IDNUMBER', ['FOL_IDNUMBER_C'])
export class T_FOLDER {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'FOL_IDENTITY_N',
        })
    public FOL_IDENTITY_N: number;

    @Column('int', {
        nullable: true,
        name: 'FOL_YEAR_N',
        })
    public FOL_YEAR_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'FOL_TYPEPER_C',
        })
    public FOL_TYPEPER_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'FOL_PERIODE_N',
        })
    public FOL_PERIODE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FOL_DEPARTMENT_N',
        })
    public FOL_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FOL_GIBREF_C',
        })
    public FOL_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'FOL_IDNUMBER_C',
        })
    public FOL_IDNUMBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FOL_SHIPPINGUNIT_D',
        })
    public FOL_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FOL_REF_SALESPRICE_D',
        })
    public FOL_REF_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FOL_PROMOPRICE_D',
        })
    public FOL_PROMOPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FOL_CESSIONPRICE_D',
        })
    public FOL_CESSIONPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'FOL_REG_SALESPRICE_D',
        })
    public FOL_REG_SALESPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'FOL_COEFFQUANT_D',
        })
    public FOL_COEFFQUANT_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOL_STARTDATE_DAT',
        })
    public FOL_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FOL_ENDDATE_DAT',
        })
    public FOL_ENDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'FOL_FOLDERTYPE_C',
        })
    public FOL_FOLDERTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'FOL_PROMOTYPE_C',
        })
    public FOL_PROMOTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'FOL_DISPLAY_C',
        })
    public FOL_DISPLAY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FOL_DESCRFRA_C',
        })
    public FOL_DESCRFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FOL_DESCRNED_C',
        })
    public FOL_DESCRNED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'FOL_PHOTO_C',
        })
    public FOL_PHOTO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'FOL_GIBREF_BASE_C',
        })
    public FOL_GIBREF_BASE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'FOL_MULTIPACK_COEFF_D',
        })
    public FOL_MULTIPACK_COEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 17,
        name: 'FOL_MESSAGE_C',
        })
    public FOL_MESSAGE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'FOL_REF_COSTPRICE_D',
        })
    public FOL_REF_COSTPRICE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FOL_CURRENCY_C',
        })
    public FOL_CURRENCY_C: string | null;

}
