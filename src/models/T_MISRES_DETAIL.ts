import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MISRES_DETAIL', {schema: 'dbo' } )
@Index('IX_MISRES_DETAIL_IDNUMBER', ['MRD_IDNUMBER_C'])
export class T_MISRES_DETAIL {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MRD_MISRESID_N',
        })
    public MRD_MISRESID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'MRD_IDNUMBER_C',
        })
    public MRD_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'MRD_QUANTITY_D',
        })
    public MRD_QUANTITY_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'MRD_PV_D',
        })
    public MRD_PV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'MRD_PVNOTAX_D',
        })
    public MRD_PVNOTAX_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'MRD_PF_D',
        })
    public MRD_PF_D: number | null;

}
