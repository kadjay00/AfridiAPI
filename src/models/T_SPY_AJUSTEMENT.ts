import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_AJUSTEMENT', {schema: 'dbo' } )
@Index('IDX_T_SPY_AJUSTEMENT_ID_STATUS', ['SAJ_AJUSTEMENTID_N', 'SAJ_STATUS_C'])
export class T_SPY_AJUSTEMENT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SAJ_ID_N',
        })
    public SAJ_ID_N: number;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'SAJ_AJUSTEMENTID_N',
        })
    public SAJ_AJUSTEMENTID_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SAJ_DATE_DAT',
        })
    public SAJ_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SAJ_USERID_C',
        })
    public SAJ_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SAJ_ACTION_C',
        })
    public SAJ_ACTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SAJ_STATUS_C',
        })
    public SAJ_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SAJ_RESULT_C',
        })
    public SAJ_RESULT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SAJ_COMMENT_C',
        })
    public SAJ_COMMENT_C: string | null;

}
