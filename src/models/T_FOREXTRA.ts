import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FOREXTRA', {schema: 'dbo' } )
export class T_FOREXTRA {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'FEX_SLICEID_N',
        })
    public FEX_SLICEID_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY1_D',
        })
    public FEX_DAY1_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY2_D',
        })
    public FEX_DAY2_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY3_D',
        })
    public FEX_DAY3_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY4_D',
        })
    public FEX_DAY4_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY5_D',
        })
    public FEX_DAY5_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY6_D',
        })
    public FEX_DAY6_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 2,
        name: 'FEX_DAY7_D',
        })
    public FEX_DAY7_D: number;

}
