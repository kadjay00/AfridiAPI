import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SN_LINE', {schema: 'dbo' } )
export class T_SN_LINE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SNL_ID_N',
        })
    public SNL_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SNL_IDNUMBER_C',
        })
    public SNL_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SNL_GLOBALSTOCK_D',
        })
    public SNL_GLOBALSTOCK_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SNL_IDCOMMANDE_C',
        })
    public SNL_IDCOMMANDE_C: string | null;

}
