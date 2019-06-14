import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_WEIGHT_DETAIL', {schema: 'dbo' } )
export class T_WEIGHT_DETAIL {

    @Column('char', {
        nullable: false,
        name: 'WED_TYPE_C',
        })
    public WED_TYPE_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'WED_DATE_DAT',
        })
    public WED_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'WED_SUBDEPARTMENT_N',
        })
    public WED_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'WED_BUDGET_N',
        })
    public WED_BUDGET_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'WED_MARGIN_N',
        })
    public WED_MARGIN_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'WED_CRACKANDTHEFT_N',
        })
    public WED_CRACKANDTHEFT_N: number | null;

}
