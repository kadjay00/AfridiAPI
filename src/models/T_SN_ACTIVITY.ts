import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SN_ACTIVITY', {schema: 'dbo' } )
export class T_SN_ACTIVITY {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'SNA_EXCEPTIONDATE_DAT',
        })
    public SNA_EXCEPTIONDATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'SNA_GROUP_C',
        })
    public SNA_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SNA_ACTIVITY_N',
        })
    public SNA_ACTIVITY_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 1,
        name: 'SNA_ORIGINE_C',
        })
    public SNA_ORIGINE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'SNA_STATE_C',
        })
    public SNA_STATE_C: string;

    @Column('int', {
        nullable: true,
        name: 'SNA_NEGSTOCKTOTAL_N',
        })
    public SNA_NEGSTOCKTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_NEGSTOCKTREATEDSTORE_N',
        })
    public SNA_NEGSTOCKTREATEDSTORE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_NEGSTOCKTREATEDDEPOT_N',
        })
    public SNA_NEGSTOCKTREATEDDEPOT_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_LOTID_N',
        })
    public SNA_LOTID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SNA_FIRSTUSER_C',
        })
    public SNA_FIRSTUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SNA_FIRSTDATE_DAT',
        })
    public SNA_FIRSTDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SNA_CHANGEUSER_C',
        })
    public SNA_CHANGEUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SNA_CHANGEDATE_DAT',
        })
    public SNA_CHANGEDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SNA_VALIDATIONUSER_C',
        })
    public SNA_VALIDATIONUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SNA_VALIDATIONDATE_DAT',
        })
    public SNA_VALIDATIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNA_VALIDATIONTOOL_C',
        })
    public SNA_VALIDATIONTOOL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SNA_LOCKEDUSER_C',
        })
    public SNA_LOCKEDUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SNA_LOCKEDDATE_DAT',
        })
    public SNA_LOCKEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SNA_LOCKEDPDT_C',
        })
    public SNA_LOCKEDPDT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_NOTSOLDTOTAL_N',
        })
    public SNA_NOTSOLDTOTAL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_NOTSOLDTREATEDSTORE_N',
        })
    public SNA_NOTSOLDTREATEDSTORE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_NOTSOLDRECALAGE_N',
        })
    public SNA_NOTSOLDRECALAGE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SNA_NEGSTOCKRECALAGE_N',
        })
    public SNA_NEGSTOCKRECALAGE_N: number | null;

}
