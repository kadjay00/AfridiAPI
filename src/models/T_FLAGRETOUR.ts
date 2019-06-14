import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FLAGRETOUR', {schema: 'dbo' } )
export class T_FLAGRETOUR {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'FRE_FLAGRETOUR_C',
        })
    public FRE_FLAGRETOUR_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FRE_DESCRIPNED_C',
        })
    public FRE_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'FRE_DESCRIPFRA_C',
        })
    public FRE_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'FRE_RFDESCRIPNED_C',
        })
    public FRE_RFDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'FRE_RFDESCRIPFRA_C',
        })
    public FRE_RFDESCRIPFRA_C: string | null;

}
