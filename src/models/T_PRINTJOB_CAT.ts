import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTJOB_CAT', {schema: 'dbo' } )
export class T_PRINTJOB_CAT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'JOC_JOBCATEGORY_C',
        })
    public JOC_JOBCATEGORY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'JOC_DESCRIPNED_C',
        })
    public JOC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'JOC_DESCRIPFRA_C',
        })
    public JOC_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'JOC_FLAG1_C',
        })
    public JOC_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'JOC_FLAG2_C',
        })
    public JOC_FLAG2_C: string | null;

}
