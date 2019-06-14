import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CONDITIONTICKET', {schema: 'dbo' } )
@Index('IX_CONDITIONTICKET_PKINDEX', ['CTC_CONDITIONTICKET_N'], {unique: true})
export class T_CONDITIONTICKET {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CTC_CONDITIONTICKET_N',
        })
    public CTC_CONDITIONTICKET_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CTC_DESCRIPNED_C',
        })
    public CTC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CTC_DESCRIPFRA_C',
        })
    public CTC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CTC_USERID_C',
        })
    public CTC_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ctc_flagdelete_C',
        })
    public ctc_flagdelete_C: string | null;

}
