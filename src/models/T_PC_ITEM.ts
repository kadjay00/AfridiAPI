import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PC_ITEM', {schema: 'dbo' } )
export class T_PC_ITEM {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PIT_CONTROL_DAT',
        })
    public PIT_CONTROL_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PIT_IDNUMBER_C',
        })
    public PIT_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'PIT_MANAGER_N',
        })
    public PIT_MANAGER_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIT_DATE_DAT',
        })
    public PIT_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PIT_USERID_C',
        })
    public PIT_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'PIT_PDT_C',
        })
    public PIT_PDT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PIT_CENTRALSUPCODE_C',
        })
    public PIT_CENTRALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PIT_LOCALSUPCODE_C',
        })
    public PIT_LOCALSUPCODE_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PIT_ACTIVESELLINGPRICE_D',
        })
    public PIT_ACTIVESELLINGPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PIT_PRICETYPE_C',
        })
    public PIT_PRICETYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PIT_LOCALINPUT_C',
        })
    public PIT_LOCALINPUT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PIT_FUTUREACTIVESELLINGPRICE_D',
        })
    public PIT_FUTUREACTIVESELLINGPRICE_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PIT_FUTUREPRICETYPE_C',
        })
    public PIT_FUTUREPRICETYPE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PIT_FUTURELOCALINPUT_C',
        })
    public PIT_FUTURELOCALINPUT_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIT_FUTURESTART_DAT',
        })
    public PIT_FUTURESTART_DAT: Date | null;

}
