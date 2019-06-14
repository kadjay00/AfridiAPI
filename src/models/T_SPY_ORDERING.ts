import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_ORDERING', {schema: 'dbo' } )
@Index('IDX_SPY_ORD01', ['SPO_JOURNALID_N', 'SPO_ORDERNUMBER_C', 'SPO_MESSAGETYPE_C'])
@Index('IDX_SPY_ORD02', ['SPO_ORDERNUMBER_C', 'SPO_MESSAGETYPE_C'])
@Index('IDX_SPY_ORD03', ['SPO_DATE_DAT'])
export class T_SPY_ORDERING {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SPO_SPYID_N',
        })
    public SPO_SPYID_N: number;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'SPO_JOURNALID_N',
        })
    public SPO_JOURNALID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'SPO_ORDERNUMBER_C',
        })
    public SPO_ORDERNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPO_MESSAGETYPE_C',
        })
    public SPO_MESSAGETYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPO_MESSAGETEXT_C',
        })
    public SPO_MESSAGETEXT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPO_DATE_DAT',
        })
    public SPO_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPO_USER_C',
        })
    public SPO_USER_C: string | null;

}
