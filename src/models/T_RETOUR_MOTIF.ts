import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RETOUR_MOTIF', {schema: 'dbo' } )
export class T_RETOUR_MOTIF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'REM_MOTIF_N',
        })
    public REM_MOTIF_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REM_DESCRIPFRA_C',
        })
    public REM_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'REM_DESCRIPNED_C',
        })
    public REM_DESCRIPNED_C: string | null;

}
