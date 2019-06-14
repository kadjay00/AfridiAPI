import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MESSAGESERIE', {schema: 'dbo' } )
@Index('IX_MESSAGESERIE_PKINDEX', ['MSS_SERIENBR_N'], {unique: true})
export class T_MESSAGESERIE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MSS_SERIENBR_N',
        })
    public MSS_SERIENBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MSS_SERIEDESCRIP_C',
        })
    public MSS_SERIEDESCRIP_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'MSS_RANGEFROM_N',
        })
    public MSS_RANGEFROM_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'MSS_STARTDATE_DAT',
        })
    public MSS_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'MSS_ENDDATE_DAT',
        })
    public MSS_ENDDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MSS_PRIORITYCODE_C',
        })
    public MSS_PRIORITYCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MSS_CREATIONDATE_DAT',
        })
    public MSS_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'MSS_UPDATEDATE_DAT',
        })
    public MSS_UPDATEDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MSS_TRNSMCODE_C',
        })
    public MSS_TRNSMCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MSS_TRNSMDATE_DAT',
        })
    public MSS_TRNSMDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'MSS_TRNSMSESSION_N',
        })
    public MSS_TRNSMSESSION_N: number | null;

}
