import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SEQUENCE_TYPE', {schema: 'dbo' } )
export class T_SEQUENCE_TYPE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'SQT_SEQTYPE_C',
        })
    public SQT_SEQTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SQT_DESCRIPNED_C',
        })
    public SQT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SQT_DESCRIPFRA_C',
        })
    public SQT_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SQT_FLAG_C',
        })
    public SQT_FLAG_C: string | null;

}
