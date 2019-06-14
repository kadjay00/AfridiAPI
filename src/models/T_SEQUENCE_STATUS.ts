import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SEQUENCE_STATUS', {schema: 'dbo' } )
export class T_SEQUENCE_STATUS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SQS_STATUS_N',
        })
    public SQS_STATUS_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SQS_DESCRIPNED_C',
        })
    public SQS_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SQS_DESCRIPFRA_C',
        })
    public SQS_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SQS_USERSELECT_C',
        })
    public SQS_USERSELECT_C: string | null;

}
