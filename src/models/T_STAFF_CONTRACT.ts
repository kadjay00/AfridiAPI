import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_CONTRACT', {schema: 'dbo' } )
@Index('IX_CONTRACT_STAFFID', ['SCO_STAFFID_N', 'SCO_STARTDATE_DAT', 'SCO_ENDDATE_DAT'])
@Index('IX_CONTRACT_STARTDATE', ['SCO_STARTDATE_DAT', 'SCO_TYPE_C'])
export class T_STAFF_CONTRACT {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SCO_CONTRACTID_N',
        })
    public SCO_CONTRACTID_N: number;

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SCO_CHANGEID_N',
        })
    public SCO_CHANGEID_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SCO_STAFFID_N',
        })
    public SCO_STAFFID_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SCO_TYPE_C',
        })
    public SCO_TYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SCO_STARTDATE_DAT',
        })
    public SCO_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SCO_ENDDATE_DAT',
        })
    public SCO_ENDDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SCO_ACTIVITY_N',
        })
    public SCO_ACTIVITY_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SCO_FUNCTION_N',
        })
    public SCO_FUNCTION_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'SCO_NBRHOURS_N',
        })
    public SCO_NBRHOURS_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SCO_RAISON_C',
        })
    public SCO_RAISON_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SCO_STARTCONT_DAT',
        })
    public SCO_STARTCONT_DAT: Date | null;

}
