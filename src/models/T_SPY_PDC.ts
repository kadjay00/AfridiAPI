import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_PDC', {schema: 'dbo' } )
@Index('IDX_T_SPY_PDC_DATE', ['SPY_DATE_DAT'])
@Index('IDX_T_SPY_PDC_PDCNUMBER', ['SPY_PDCNUMBER_N'])
export class T_SPY_PDC {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 0,
        name: 'SPY_PDCNUMBER_N',
        })
    public SPY_PDCNUMBER_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_DATE_DAT',
        })
    public SPY_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SPY_USERID_C',
        })
    public SPY_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPY_ORIGSTATE_C',
        })
    public SPY_ORIGSTATE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPY_NEWSTATE_C',
        })
    public SPY_NEWSTATE_C: string | null;

}
