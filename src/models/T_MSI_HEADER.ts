import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MSI_HEADER', {schema: 'dbo' } )
export class T_MSI_HEADER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MHE_HEADER_N',
        })
    public MHE_HEADER_N: number;

    @Column('varchar', {
        nullable: true,
        name: 'MHE_DESCRIPTIONN_C',
        })
    public MHE_DESCRIPTIONN_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'MHE_DESCRIPTIONF_C',
        })
    public MHE_DESCRIPTIONF_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MHE_TYPE_C',
        })
    public MHE_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'MHE_ACTIVITE_N',
        })
    public MHE_ACTIVITE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'MHE_DEPARTMENT_N',
        })
    public MHE_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'MHE_EXPRESSION_C',
        })
    public MHE_EXPRESSION_C: string | null;

}
