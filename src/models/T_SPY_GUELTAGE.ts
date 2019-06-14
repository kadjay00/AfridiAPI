import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_GUELTAGE', {schema: 'dbo' } )
export class T_SPY_GUELTAGE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPY_IDNUMBER_N',
        })
    public SPY_IDNUMBER_N: string | null;

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

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'SPY_ORIGGUELDAGE_D',
        })
    public SPY_ORIGGUELDAGE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'SPY_NEWGUELDAGE_D',
        })
    public SPY_NEWGUELDAGE_D: number | null;

}
