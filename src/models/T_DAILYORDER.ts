import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DAILYORDER', {schema: 'dbo' } )
export class T_DAILYORDER {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'LDO_DATE_DAT',
        })
    public LDO_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'LDO_GROUP_C',
        })
    public LDO_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LDO_ACTIVITY_N',
        })
    public LDO_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LDO_SUBDEPARTMENT_N',
        })
    public LDO_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 12,
        scale: 2,
        name: 'LDO_TURNOVERPV_D',
        })
    public LDO_TURNOVERPV_D: number | null;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'LDO_FORECASTPV_D',
        })
    public LDO_FORECASTPV_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'LDO_FORECASTPVPROMO_D',
        })
    public LDO_FORECASTPVPROMO_D: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'LDO_PRICECURRENCY_C',
        })
    public LDO_PRICECURRENCY_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 6,
        scale: 2,
        name: 'LDO_INDEX_D',
        })
    public LDO_INDEX_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'LDO_FLAG1_C',
        })
    public LDO_FLAG1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'LDO_FLAG2_C',
        })
    public LDO_FLAG2_C: string | null;

}
