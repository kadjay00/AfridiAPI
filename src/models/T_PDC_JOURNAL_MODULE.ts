import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_JOURNAL_MODULE', {schema: 'dbo' } )
export class T_PDC_JOURNAL_MODULE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'PJM_CODE_C',
        })
    public PJM_CODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PJM_DESCRIPTIONNED_C',
        })
    public PJM_DESCRIPTIONNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PJM_DESCRIPTIONFRA_C',
        })
    public PJM_DESCRIPTIONFRA_C: string | null;

}
