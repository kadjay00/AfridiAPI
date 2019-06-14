import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SEQUENCEDETAIL_STORE', {schema: 'dbo' } )
export class T_SEQUENCEDETAIL_STORE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SDS_SEQID_N',
        })
    public SDS_SEQID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SDS_SEQNR_N',
        })
    public SDS_SEQNR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SDS_IDNUMBER_C',
        })
    public SDS_IDNUMBER_C: string | null;

}
