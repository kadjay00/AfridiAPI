import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_HOLIDAY', {schema: 'dbo' } )
export class T_STAFF_HOLIDAY {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'HOL_STAFFID_N',
        })
    public HOL_STAFFID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HOL_YEAR_N',
        })
    public HOL_YEAR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HOL_WEEKOFYEAR_N',
        })
    public HOL_WEEKOFYEAR_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'HOL_STARTDATE_DAT',
        })
    public HOL_STARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'HOL_ENDDATE_DAT',
        })
    public HOL_ENDDATE_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'HOL_NBRDAYS_N',
        })
    public HOL_NBRDAYS_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'HOL_NBRHOURS_N',
        })
    public HOL_NBRHOURS_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'HOL_REASON_N',
        })
    public HOL_REASON_N: number | null;

}
