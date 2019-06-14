import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRNDF_DETAIL', {schema: 'dbo' } )
export class T_PRNDF_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 9,
        scale: 0,
        name: 'PRD_ID_N',
        })
    public PRD_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRD_IDNUMBER_C',
        })
    public PRD_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRD_PVOLD_D',
        })
    public PRD_PVOLD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PRD_PVNEW_D',
        })
    public PRD_PVNEW_D: number | null;

}
