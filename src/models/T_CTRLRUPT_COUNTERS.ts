import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CTRLRUPT_COUNTERS', {schema: 'dbo' } )
export class T_CTRLRUPT_COUNTERS {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'CRC_GROUP_C',
        })
    public CRC_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CRC_ACTIVITY_N',
        })
    public CRC_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        name: 'CRC_NUMREFGEST_N',
        })
    public CRC_NUMREFGEST_N: number;

}
