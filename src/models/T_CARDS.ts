import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CARDS', {schema: 'dbo' } )
@Index('IX_CARDS_PKINDEX', ['CDS_RANGENBR_N'], {unique: true})
export class T_CARDS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CDS_RANGENBR_N',
        })
    public CDS_RANGENBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'CDS_STORENBR_N',
        })
    public CDS_STORENBR_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'CDS_RANGEFROM_N',
        })
    public CDS_RANGEFROM_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'CDS_RANGETO_N',
        })
    public CDS_RANGETO_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'CDS_STARTDATE_DAT',
        })
    public CDS_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CDS_ENDDATE_DAT',
        })
    public CDS_ENDDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CDS_RESETDATE_DAT',
        })
    public CDS_RESETDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CDS_CREATIONDATE_DAT',
        })
    public CDS_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CDS_UPDATEDATE_DAT',
        })
    public CDS_UPDATEDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'CDS_TRNSMCODE_C',
        })
    public CDS_TRNSMCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'CDS_TRNSMDATE_DAT',
        })
    public CDS_TRNSMDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'CDS_TRNSMSESSION_N',
        })
    public CDS_TRNSMSESSION_N: number | null;

}
