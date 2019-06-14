import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_MINDEPTHFACING', {schema: 'dbo' } )
export class T_SPY_MINDEPTHFACING {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'MDF_ID_N',
        })
    public MDF_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'MDF_DATE_DAT',
        })
    public MDF_DATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MDF_TYPE_C',
        })
    public MDF_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MDF_IDNUMBER_C',
        })
    public MDF_IDNUMBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'MDF_OLDVALUE_D',
        })
    public MDF_OLDVALUE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'MDF_NEWVALUE_D',
        })
    public MDF_NEWVALUE_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'MDF_REASON_C',
        })
    public MDF_REASON_C: string | null;

}
