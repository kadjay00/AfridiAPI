import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORECASTMONTHS', {schema: 'dbo' } )
export class T_FORECASTMONTHS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FMO_YEAR_N',
        })
    public FMO_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FMO_MONTH_N',
        })
    public FMO_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'FMO_SUBDEPARTMENT_N',
        })
    public FMO_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FMO_BUDGET_D',
        })
    public FMO_BUDGET_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FMO_MARGIN_D',
        })
    public FMO_MARGIN_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'FMO_CRACKANDTHEFT_D',
        })
    public FMO_CRACKANDTHEFT_D: number;

    @Column('varchar', {
        nullable: false,
        length: 35,
        name: 'FMO_CENTRALLOADUSER_C',
        })
    public FMO_CENTRALLOADUSER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'FMO_CENTRALLOADDATE_DAT',
        })
    public FMO_CENTRALLOADDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'FMO_VALIDATIONUSER_C',
        })
    public FMO_VALIDATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'FMO_VALIDATIONDATE_DAT',
        })
    public FMO_VALIDATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'FMO_EXTRACTIONDATE_DAT',
        })
    public FMO_EXTRACTIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'FMO_PRICECURRENCY_C',
        })
    public FMO_PRICECURRENCY_C: string | null;

}
