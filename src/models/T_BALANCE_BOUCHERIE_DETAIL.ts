import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_BOUCHERIE_DETAIL', {schema: 'dbo' } )
export class T_BALANCE_BOUCHERIE_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BBD_ID_N',
        })
    public BBD_ID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BBD_PLU_N',
        })
    public BBD_PLU_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'BBD_IDNUMBER_C',
        })
    public BBD_IDNUMBER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 3,
        name: 'BBD_WEIGHT_N',
        })
    public BBD_WEIGHT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 2,
        name: 'BBD_AMOUNT_N',
        })
    public BBD_AMOUNT_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 8,
        scale: 3,
        name: 'BBD_TARRA_N',
        })
    public BBD_TARRA_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'BBD_PIECE_N',
        })
    public BBD_PIECE_N: number | null;

}
