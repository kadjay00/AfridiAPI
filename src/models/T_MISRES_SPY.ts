import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MISRES_SPY', {schema: 'dbo' } )
export class T_MISRES_SPY {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'MRS_SPYID_N',
        })
    public MRS_SPYID_N: number;

    @Column('int', {
        nullable: true,
        name: 'MRS_MISRESID_N',
        })
    public MRS_MISRESID_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'MRS_DATE_DAT',
        })
    public MRS_DATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MRS_STATUS_C',
        })
    public MRS_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MRS_USERID_C',
        })
    public MRS_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'MRS_UTILITY_C',
        })
    public MRS_UTILITY_C: string | null;

}
