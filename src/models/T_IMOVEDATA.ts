import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_IMOVEDATA', {schema: 'dbo' } )
@Index('IX_IMOVEDATA_SESEAN', ['IMD_EANCODE_N'])
export class T_IMOVEDATA {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IMD_SESSIONNBR_N',
        })
    public IMD_SESSIONNBR_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 13,
        scale: 0,
        name: 'IMD_EANCODE_N',
        })
    public IMD_EANCODE_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IMD_RECORDTYPE_C',
        })
    public IMD_RECORDTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'IMD_PROMONUMBER_C',
        })
    public IMD_PROMONUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'IMD_NUMBERSALES_D',
        })
    public IMD_NUMBERSALES_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMD_AMOUNTSALES_D',
        })
    public IMD_AMOUNTSALES_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'IMD_WEIGHTSALES_D',
        })
    public IMD_WEIGHTSALES_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'IMD_DEPARTMENT_N',
        })
    public IMD_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'IMD_GIBREF_C',
        })
    public IMD_GIBREF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMD_FLAGLOCALITEM_C',
        })
    public IMD_FLAGLOCALITEM_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMD_FLAG1_C',
        })
    public IMD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMD_FLAG2_C',
        })
    public IMD_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'IMD_PRICECURRENCY_C',
        })
    public IMD_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IMD_FLAGMODIFIED_C',
        })
    public IMD_FLAGMODIFIED_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'IMD_SUBDEPARTMENT_N',
        })
    public IMD_SUBDEPARTMENT_N: number | null;

}
