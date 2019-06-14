import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BUDGET_DETAIL', {schema: 'dbo' } )
export class T_BUDGET_DETAIL {

    @Column('varchar', {
        nullable: false,
        length: 6,
        name: 'BUD_STOREID_C',
        })
    public BUD_STOREID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BUD_YEAR_N',
        })
    public BUD_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BUD_MONTH_N',
        })
    public BUD_MONTH_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BUD_SUBDEPARTMENT_N',
        })
    public BUD_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'BUD_BUDGET_N',
        })
    public BUD_BUDGET_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 11,
        scale: 2,
        name: 'BUD_MARGIN_N',
        })
    public BUD_MARGIN_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'BUD_CRACKANDTHEFT_N',
        })
    public BUD_CRACKANDTHEFT_N: number | null;

}
