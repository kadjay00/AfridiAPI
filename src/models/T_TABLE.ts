import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TABLE', {schema: 'dbo' } )
export class T_TABLE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'TAB_TABLEID_C',
        })
    public TAB_TABLEID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TAB_TABLENAME_C',
        })
    public TAB_TABLENAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TAB_TABLECODE_C',
        })
    public TAB_TABLECODE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'TAB_DATAWINDOW_W',
        })
    public TAB_DATAWINDOW_W: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'TAB_COMMENT_C',
        })
    public TAB_COMMENT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'TAB_NBRTOTRANSMIT_N',
        })
    public TAB_NBRTOTRANSMIT_N: number | null;

}
