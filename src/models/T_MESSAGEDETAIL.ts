import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MESSAGEDETAIL', {schema: 'dbo' } )
@Index('IX_MESSAGEDETAIL_PKINDEX', ['DMS_SERIENBR_N', 'DMS_MESSAGENBR_N', 'DMS_MESSAGESWITCH_C', 'DMS_MESSAGELANGUAGE_C', 'DMS_MESSAGELINENBR_N'], {unique: true})
export class T_MESSAGEDETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DMS_SERIENBR_N',
        })
    public DMS_SERIENBR_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DMS_MESSAGENBR_N',
        })
    public DMS_MESSAGENBR_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'DMS_MESSAGESWITCH_C',
        })
    public DMS_MESSAGESWITCH_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'DMS_MESSAGELANGUAGE_C',
        })
    public DMS_MESSAGELANGUAGE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DMS_MESSAGELINENBR_N',
        })
    public DMS_MESSAGELINENBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 38,
        name: 'DMS_MESSAGETEXT_C',
        })
    public DMS_MESSAGETEXT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'DMS_MESSAGELINESKIP_N',
        })
    public DMS_MESSAGELINESKIP_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'DMS_CREATIONDATE_DAT',
        })
    public DMS_CREATIONDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'DMS_UPDATEDATE_DAT',
        })
    public DMS_UPDATEDATE_DAT: Date | null;

}
