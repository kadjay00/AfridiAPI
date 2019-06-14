import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_ITEM3PDCSTATE', {schema: 'dbo' } )
@Index('IDX_T_SPY_ITEM3PDCSTATE', ['IPS_IDNUMBER_C', 'IPS_DATE_DAT'])
export class T_SPY_ITEM3PDCSTATE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'IPS_ID_N',
        })
    public IPS_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IPS_IDNUMBER_C',
        })
    public IPS_IDNUMBER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'IPS_DATE_DAT',
        })
    public IPS_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'IPS_PDCSTATE_C',
        })
    public IPS_PDCSTATE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'IPS_REASON_C',
        })
    public IPS_REASON_C: string | null;

}
