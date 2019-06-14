import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_EJ_TRANSACTIONS', {schema: 'dbo' } )
@Index('IX_EJ_TRANSACTIONS_CRITERIA', ['EJT_DATE_DAT'])
export class T_EJ_TRANSACTIONS {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:12,
        // scale:0,
        name: 'EJT_ID_N',
        })
    public EJT_ID_N: number;

    @Column('int', {
        nullable: true,
        name: 'EJT_REGISTER_N',
        })
    public EJT_REGISTER_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'EJT_TRANSACTION_N',
        })
    public EJT_TRANSACTION_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'EJT_OPERATOR_N',
        })
    public EJT_OPERATOR_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'EJT_DATE_DAT',
        })
    public EJT_DATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'EJT_TYPE_C',
        })
    public EJT_TYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'EJT_VISUAL_C',
        })
    public EJT_VISUAL_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'EJT_STATUS_C',
        })
    public EJT_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'EJT_FILENAME_C',
        })
    public EJT_FILENAME_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'EJT_SEALPREVIOUS_N',
        })
    public EJT_SEALPREVIOUS_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'EJT_SEALCURRENT_N',
        })
    public EJT_SEALCURRENT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 2,
        name: 'EJT_TURNOVERGROSS_N',
        })
    public EJT_TURNOVERGROSS_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 2,
        name: 'EJT_TURNOVERNET_N',
        })
    public EJT_TURNOVERNET_N: number | null;

}
