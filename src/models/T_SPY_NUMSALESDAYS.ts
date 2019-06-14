import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_NUMSALESDAYS', {schema: 'dbo' } )
export class T_SPY_NUMSALESDAYS {

    @PrimaryGeneratedColumn({
        type: 'numeric',
      //  scale:0,
        name: 'NSD_ID_N',
        })
    public NSD_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'NSD_DATE_DAT',
        })
    public NSD_DATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'NSD_TYPE_C',
        })
    public NSD_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'NSD_IDNUMBER_C',
        })
    public NSD_IDNUMBER_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'NSD_OLDVALUE_N',
        })
    public NSD_OLDVALUE_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'NSD_NEWVALUE_N',
        })
    public NSD_NEWVALUE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'NSD_REASON_C',
        })
    public NSD_REASON_C: string | null;

}
