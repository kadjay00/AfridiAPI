import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORSCA', {schema: 'dbo' } )
export class T_FORSCA {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'FSC_SLICEID_N',
        })
    public FSC_SLICEID_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY1_N',
        })
    public FSC_DAY1_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY2_N',
        })
    public FSC_DAY2_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY3_N',
        })
    public FSC_DAY3_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY4_N',
        })
    public FSC_DAY4_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY5_N',
        })
    public FSC_DAY5_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY6_N',
        })
    public FSC_DAY6_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'FSC_DAY7_N',
        })
    public FSC_DAY7_N: number;

}
