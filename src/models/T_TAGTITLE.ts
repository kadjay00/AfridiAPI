import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGTITLE', {schema: 'dbo' } )
export class T_TAGTITLE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'TTI_TITLECODE_C',
        })
    public TTI_TITLECODE_C: string;

    @Column('int', {
        nullable: true,
        name: 'TTI_SEQUENCE_N',
        })
    public TTI_SEQUENCE_N: number | null;

}
