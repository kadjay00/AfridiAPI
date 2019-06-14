import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOURS_CLEANUP', {schema: 'dbo' } )
export class T_RETOURS_CLEANUP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'RTC_RETOURTYPE_C',
        })
    public RTC_RETOURTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'RTC_TYPE_C',
        })
    public RTC_TYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'RTC_STATUS_C',
        })
    public RTC_STATUS_C: string;

    @Column('smallint', {
        nullable: false,
        name: 'RTC_MONTHS_N',
        })
    public RTC_MONTHS_N: number;

}
