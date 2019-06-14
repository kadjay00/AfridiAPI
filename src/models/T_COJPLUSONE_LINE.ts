import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COJPLUSONE_LINE', {schema: 'dbo' } )
export class T_COJPLUSONE_LINE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CJL_ID_N',
        })
    public CJL_ID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'CJL_IDNUMBER_C',
        })
    public CJL_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CJL_GLOBALSTOCK_D',
        })
    public CJL_GLOBALSTOCK_D: number | null;

}
