import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MISRES', {schema: 'dbo' } )
export class T_MISRES {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'MIR_MISRESID_N',
        })
    public MIR_MISRESID_N: number;

    @Column('smallint', {
        nullable: true,
        name: 'MIR_EVENTID_N',
        })
    public MIR_EVENTID_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'MIR_STATUS_C',
        })
    public MIR_STATUS_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_RECALL_DAT',
        })
    public MIR_RECALL_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MIR_LOCALISATION_C',
        })
    public MIR_LOCALISATION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_CREATION_DAT',
        })
    public MIR_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MIR_USERCREATE_C',
        })
    public MIR_USERCREATE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_FIRSTVALIDATION_DAT',
        })
    public MIR_FIRSTVALIDATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MIR_USERFIRSTVALIDATION_C',
        })
    public MIR_USERFIRSTVALIDATION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_MODIF_DAT',
        })
    public MIR_MODIF_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MIR_USERMODIF_C',
        })
    public MIR_USERMODIF_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_LASTVALIDATION_DAT',
        })
    public MIR_LASTVALIDATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MIR_USERLASTVALIDATION_C',
        })
    public MIR_USERLASTVALIDATION_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_REENTER_DAT',
        })
    public MIR_REENTER_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MIR_USERREENTER_C',
        })
    public MIR_USERREENTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MIR_LOCKUSER_C',
        })
    public MIR_LOCKUSER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MIR_LOCKDATE_DAT',
        })
    public MIR_LOCKDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MIR_LOCKPDT_C',
        })
    public MIR_LOCKPDT_C: string | null;

}
