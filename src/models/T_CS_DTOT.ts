import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_DTOT', {schema: 'dbo' } )
export class T_CS_DTOT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CDT_REPORTID_N',
        })
    public CDT_REPORTID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'CDT_FAMILY_C',
        })
    public CDT_FAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'CDT_SUBFAMILY_C',
        })
    public CDT_SUBFAMILY_C: string;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_COSTPROPPREVWEEK_N',
        })
    public CDT_COSTPROPPREVWEEK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_SALESPROPPREVWEEK_N',
        })
    public CDT_SALESPROPPREVWEEK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_SALESPROPPREVWEEKEXTAX_N',
        })
    public CDT_SALESPROPPREVWEEKEXTAX_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_COSTORDERPREVWEEK_N',
        })
    public CDT_COSTORDERPREVWEEK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_SALESORDERPREVWEEK_N',
        })
    public CDT_SALESORDERPREVWEEK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_SALESORDERPREVWEEKEXTAX_N',
        })
    public CDT_SALESORDERPREVWEEKEXTAX_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_COSTPROPCURRWEEK_N',
        })
    public CDT_COSTPROPCURRWEEK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_SALESPROPCURRWEEK_N',
        })
    public CDT_SALESPROPCURRWEEK_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 12,
        scale: 3,
        name: 'CDT_SALESPROPCURRWEEKEXTAX_N',
        })
    public CDT_SALESPROPCURRWEEKEXTAX_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'CDT_PRICECURRENCY_C',
        })
    public CDT_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CDT_FCVV_C',
        })
    public CDT_FCVV_C: string;

}
