import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DLC_MANAGEMENT', {schema: 'dbo' } )
export class T_DLC_MANAGEMENT {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'DLM_DATA_DAT',
        })
    public DLM_DATA_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DLM_SUBDEPARTMENT_N',
        })
    public DLM_SUBDEPARTMENT_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'DLM_START_DAT',
        })
    public DLM_START_DAT: Date;

    @Column('datetime', {
        nullable: true,
        name: 'DLM_END_DAT',
        })
    public DLM_END_DAT: Date | null;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'DLM_USERID_C',
        })
    public DLM_USERID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'DLM_PDT_C',
        })
    public DLM_PDT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'DLM_COMMENT_C',
        })
    public DLM_COMMENT_C: string | null;

}
