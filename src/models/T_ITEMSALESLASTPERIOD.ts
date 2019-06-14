import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEMSALESLASTPERIOD', {schema: 'dbo' } )
export class T_ITEMSALESLASTPERIOD {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'ISP_IDNUMBER_C',
        })
    public ISP_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'ISP_DEPARTMENT_N',
        })
    public ISP_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'ISP_GIBREF_C',
        })
    public ISP_GIBREF_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'ISP_GROUP_C',
        })
    public ISP_GROUP_C: string;

    @Column('int', {
        nullable: false,
        name: 'ISP_ACTIVITY_N',
        })
    public ISP_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        name: 'ISP_SUBDEPARTMENT_N',
        })
    public ISP_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'ISP_SALESGROUP_C',
        })
    public ISP_SALESGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'ISP_SALESFAMILY_C',
        })
    public ISP_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: false,
        length: 4,
        name: 'ISP_SALESSUBFAMILY_C',
        })
    public ISP_SALESSUBFAMILY_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 13,
        scale: 2,
        name: 'ISP_SUMPV_D',
        })
    public ISP_SUMPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ISP_SUMPF_D',
        })
    public ISP_SUMPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 3,
        name: 'ISP_SUMBW_D',
        })
    public ISP_SUMBW_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'ISP_FLAG1_C',
        })
    public ISP_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ISP_FLAG2_C',
        })
    public ISP_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'ISP_PRICECURRENCY_C',
        })
    public ISP_PRICECURRENCY_C: string | null;

}
