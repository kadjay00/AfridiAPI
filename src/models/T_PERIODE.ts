import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PERIODE', {schema: 'dbo' } )
@Index('IX_PERIODE_PERIODEENDDATE', ['PER_PERIODEFOODNONFOOD_C', 'PER_PERIODENBR_C', 'PER_ENDDATE_DAT'], {unique: true})
@Index('IX_PERIODE_PKINDEX', ['PER_PERIODEFOODNONFOOD_C', 'PER_PERIODENBR_C'], {unique: true})
export class T_PERIODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'PER_PERIODEFOODNONFOOD_C',
        })
    public PER_PERIODEFOODNONFOOD_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PER_PERIODENBR_C',
        })
    public PER_PERIODENBR_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'PER_ENDDATE_DAT',
        })
    public PER_ENDDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PER_DESCRIPNED_C',
        })
    public PER_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PER_DESCRIPFRA_C',
        })
    public PER_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PER_PERIODESTATUS_C',
        })
    public PER_PERIODESTATUS_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PER_MINSALESCOEFF_D',
        })
    public PER_MINSALESCOEFF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'PER_MINPROFITCOEFF_D',
        })
    public PER_MINPROFITCOEFF_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'PER_ORDERNUMBER_C',
        })
    public PER_ORDERNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PER_ANNOUNCED_C',
        })
    public PER_ANNOUNCED_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PER_ANNOUNCEDDATE_DAT',
        })
    public PER_ANNOUNCEDDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PER_CMDISPROP_C',
        })
    public PER_CMDISPROP_C: string | null;

}
