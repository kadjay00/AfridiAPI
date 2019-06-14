import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RF_LABELS', {schema: 'dbo' } )
export class T_RF_LABELS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RFL_ID_N',
        })
    public RFL_ID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'RFL_NL_C',
        })
    public RFL_NL_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'RFL_FR_C',
        })
    public RFL_FR_C: string | null;

}
