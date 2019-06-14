import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {T_ITEM1} from './T_ITEM1';

@Entity('T_EANCODE', {schema: 'dbo' } )
@Index('IX_EANCODE_IDNUMBEREANCODE', ['idNumber', 'eanCode'], {unique: true})
export class T_EANCODE {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 13,
        scale: 0,
        name: 'EAN_EANCODE_N',
        })
    public eanCode: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'EAN_IDNUMBER_C',
        })
    public idNumber: string;

    @Column('char', {
        nullable: true,
        name: 'EAN_LOCALEAN_C',
        })
    public EAN_LOCALEAN_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EAN_INTRODATE_DAT',
        })
    public EAN_INTRODATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'EAN_LASTSALEDATE_DAT',
        })
    public EAN_LASTSALEDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'EAN_CENTRALSUPCODE_C',
        })
    public EAN_CENTRALSUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EAN_CENTRALSUPDATE_DAT',
        })
    public EAN_CENTRALSUPDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'EAN_LOCALSUPCODE_C',
        })
    public EAN_LOCALSUPCODE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'EAN_LOCALSUPDATE_DAT',
        })
    public EAN_LOCALSUPDATE_DAT: Date | null;

    @Column('timestamp', {
        nullable: true,
        name: 'EAN_LASTUPDATE_TS',
        })
    public EAN_LASTUPDATE_TS: Date | null;

    @ManyToOne(type => T_ITEM1, item1 => item1.idnumber)
    @JoinColumn({name: 'EAN_IDNUMBER_C'})
    public item1: T_ITEM1;

}
