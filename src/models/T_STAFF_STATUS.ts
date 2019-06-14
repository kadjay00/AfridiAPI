import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_STATUS', {schema: 'dbo' } )
export class T_STAFF_STATUS {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'STT_STAFFID_N',
        })
    public STT_STAFFID_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'STT_STARTDATE_DAT',
        })
    public STT_STARTDATE_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'STT_ENDDATE_DAT',
        })
    public STT_ENDDATE_DAT: Date | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'STT_STATUS_N',
        })
    public STT_STATUS_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'STT_CERTIFDATE_DAT',
        })
    public STT_CERTIFDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'STT_COMMENT_C',
        })
    public STT_COMMENT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STT_TYPE_C',
        })
    public STT_TYPE_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'STT_NBRHOURS_N',
        })
    public STT_NBRHOURS_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'stt_sequence_n',
        })
    public stt_sequence_n: number | null;

}
