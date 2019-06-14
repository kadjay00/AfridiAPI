import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MOVEMENT', {schema: 'dbo' } )
@Index('IX_MOVEMENT_APPL', ['MVT_APPLICATIONDATE_DAT', 'MVT_TREATEDDATE_DAT', 'MVT_ASAPNIGHT_C', 'MVT_IDNUMBER_C', 'MVT_EANCODE_N', 'MVT_CREATIONDATE_DAT'])
export class T_MOVEMENT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'MVT_IDENTITY_D',
        })
    public MVT_IDENTITY_D: number;

    @Column('datetime', {
        nullable: false,
        name: 'MVT_APPLICATIONDATE_DAT',
        })
    public MVT_APPLICATIONDATE_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'MVT_TREATEDDATE_DAT',
        })
    public MVT_TREATEDDATE_DAT: Date;

    @Column('char', {
        nullable: false,
        name: 'MVT_ASAPNIGHT_C',
        })
    public MVT_ASAPNIGHT_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'MVT_IDNUMBER_C',
        })
    public MVT_IDNUMBER_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 13,
        scale: 0,
        name: 'MVT_EANCODE_N',
        })
    public MVT_EANCODE_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'MVT_CREATIONDATE_DAT',
        })
    public MVT_CREATIONDATE_DAT: Date;

    @Column('char', {
        nullable: true,
        name: 'MVT_POSINTERFACE_C',
        })
    public MVT_POSINTERFACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_LABELINTERFACE_C',
        })
    public MVT_LABELINTERFACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_BALANCEINTERFACE_C',
        })
    public MVT_BALANCEINTERFACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_INTERFACE4_C',
        })
    public MVT_INTERFACE4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_INTERFACE5_C',
        })
    public MVT_INTERFACE5_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_INTERFACE6_C',
        })
    public MVT_INTERFACE6_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_INTERFACE7_C',
        })
    public MVT_INTERFACE7_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_INTERFACE8_C',
        })
    public MVT_INTERFACE8_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MVT_USERID_C',
        })
    public MVT_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MVT_RFIDINTERFACE_C',
        })
    public MVT_RFIDINTERFACE_C: string | null;

}
