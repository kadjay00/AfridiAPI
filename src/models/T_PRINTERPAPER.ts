import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRINTERPAPER', {schema: 'dbo' } )
export class T_PRINTERPAPER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PRP_PAPERID_C',
        })
    public PRP_PAPERID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRP_DESCRIPTIONFRA_C',
        })
    public PRP_DESCRIPTIONFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRP_DESCRIPTIONNED_C',
        })
    public PRP_DESCRIPTIONNED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'prp_flagdelete_C',
        })
    public prp_flagdelete_C: string | null;

}
