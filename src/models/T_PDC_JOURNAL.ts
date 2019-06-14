import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_JOURNAL', {schema: 'dbo' } )
export class T_PDC_JOURNAL {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'JNL_JOURNALID_N',
        })
    public JNL_JOURNALID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'JNL_MODULECODE_C',
        })
    public JNL_MODULECODE_C: string;

    @Column('char', {
        nullable: true,
        name: 'JNL_DEBUG_C',
        })
    public JNL_DEBUG_C: string | null;

    @Column('datetime', {
        nullable: false,
        name: 'JNL_PROCESSDATE_DAT',
        })
    public JNL_PROCESSDATE_DAT: Date;

    @Column('numeric', {
        nullable: false,
        precision: 10,
        scale: 0,
        name: 'JNL_PROCESSID_N',
        })
    public JNL_PROCESSID_N: number;

    @Column('int', {
        nullable: true,
        name: 'JNL_RETURNCODE_N',
        })
    public JNL_RETURNCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'JNL_MESSAGE_C',
        })
    public JNL_MESSAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'JNL_ERRVALUES_C',
        })
    public JNL_ERRVALUES_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'JNL_MESSAGEDEBUG_C',
        })
    public JNL_MESSAGEDEBUG_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'JNL_SEVERITYDEBUG_N',
        })
    public JNL_SEVERITYDEBUG_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'JNL_ALLOK_C',
        })
    public JNL_ALLOK_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'JNL_CREATED_DAT',
        })
    public JNL_CREATED_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'JNL_MESSAGECOUNT_N',
        })
    public JNL_MESSAGECOUNT_N: number | null;

    @Column('char', {
        nullable: false,
        name: 'JNL_MSGTYPE_C',
        })
    public JNL_MSGTYPE_C: string;

}
