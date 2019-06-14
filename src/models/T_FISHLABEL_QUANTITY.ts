import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FISHLABEL_QUANTITY', {schema: 'dbo' } )
export class T_FISHLABEL_QUANTITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'FLQ_IDNUMBER_C',
        })
    public FLQ_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'FLQ_A7_N',
        })
    public FLQ_A7_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FLQ_A6_N',
        })
    public FLQ_A6_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FLQ_A5_N',
        })
    public FLQ_A5_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'FLQ_A3_N',
        })
    public FLQ_A3_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'FLQ_LOGO_C',
        })
    public FLQ_LOGO_C: string | null;

}
