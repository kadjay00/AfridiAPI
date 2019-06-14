import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTJOB', {schema: 'dbo' } )
export class T_PRINTJOB {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'JOB_JOBID_N',
        })
    public JOB_JOBID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'JOB_JOBDESCRIPTION_C',
        })
    public JOB_JOBDESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'JOB_JOBCATEGORY_C',
        })
    public JOB_JOBCATEGORY_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'JOB_CREATIONDATE_DAT',
        })
    public JOB_CREATIONDATE_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'JOB_STATUS_C',
        })
    public JOB_STATUS_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'JOB_FILENAME_C',
        })
    public JOB_FILENAME_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 60,
        name: 'JOB_COMMENT_C',
        })
    public JOB_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2500,
        name: 'JOB_PARAM_C',
        })
    public JOB_PARAM_C: string | null;

}
