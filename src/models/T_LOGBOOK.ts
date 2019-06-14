import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LOGBOOK', {schema: 'dbo' } )
@Index('IX_LOGBOOK_SUBDEPARTMENT', ['LGB_SUBDEPARTMENT_N'])
export class T_LOGBOOK {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'LGB_DATE_DAT',
        })
    public LGB_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'LGB_WEEKLY_C',
        })
    public LGB_WEEKLY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'LGB_GROUP_C',
        })
    public LGB_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LGB_ACTIVITY_N',
        })
    public LGB_ACTIVITY_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LGB_SUBDEPARTMENT_N',
        })
    public LGB_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 12,
        scale: 2,
        name: 'LGB_DELIVERYPV_D',
        })
    public LGB_DELIVERYPV_D: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'LGB_PRICECURRENCY_C',
        })
    public LGB_PRICECURRENCY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'LGB_FLAG1_C',
        })
    public LGB_FLAG1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'LGB_FLAG2_C',
        })
    public LGB_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'LGB_FLAG3_C',
        })
    public LGB_FLAG3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'LGB_FLAG4_C',
        })
    public LGB_FLAG4_C: string | null;

}
