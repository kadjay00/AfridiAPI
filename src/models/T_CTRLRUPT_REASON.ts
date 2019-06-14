import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CTRLRUPT_REASON', {schema: 'dbo' } )
export class T_CTRLRUPT_REASON {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'RRU_REASON_N',
        })
    public RRU_REASON_N: number;

    @Column('varchar', {
        nullable: false,
        length: 100,
        name: 'RRU_MSGLONGNL_C',
        })
    public RRU_MSGLONGNL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 100,
        name: 'RRU_MSGLONGFR_C',
        })
    public RRU_MSGLONGFR_C: string;

    @Column('varchar', {
        nullable: false,
        length: 25,
        name: 'RRU_MSGSHORTNL_C',
        })
    public RRU_MSGSHORTNL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 25,
        name: 'RRU_MSGSHORTFR_C',
        })
    public RRU_MSGSHORTFR_C: string;

    @Column('char', {
        nullable: false,
        name: 'RRU_SOLUTION_C',
        })
    public RRU_SOLUTION_C: string;

}
