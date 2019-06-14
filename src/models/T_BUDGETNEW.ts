import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BUDGETNEW', {schema: 'dbo' } )
export class T_BUDGETNEW {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'BUD_DATE_DAT',
        })
    public BUD_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BUD_SUBDEPARTMENT_N',
        })
    public BUD_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'BUD_BUDGET_D',
        })
    public BUD_BUDGET_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'BUD_MARGIN_D',
        })
    public BUD_MARGIN_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'BUD_CRACKTHEFT_D',
        })
    public BUD_CRACKTHEFT_D: number;

}
