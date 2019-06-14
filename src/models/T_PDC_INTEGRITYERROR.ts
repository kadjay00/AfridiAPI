import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDC_INTEGRITYERROR', {schema: 'dbo' } )
export class T_PDC_INTEGRITYERROR {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'PIE_PINID_N',
        })
    public PIE_PINID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PIE_STATECODE_C',
        })
    public PIE_STATECODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PIE_ERRORVALUE_C',
        })
    public PIE_ERRORVALUE_C: string | null;

}
