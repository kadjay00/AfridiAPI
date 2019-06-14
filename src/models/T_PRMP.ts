import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRMP', {schema: 'dbo' } )
export class T_PRMP {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PRM_IDNUMBER_C',
        })
    public PRM_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PRM_DATE_DAT',
        })
    public PRM_DATE_DAT: Date;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'PRM_PRMP_D',
        })
    public PRM_PRMP_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'PRM_ORIGIN_C',
        })
    public PRM_ORIGIN_C: string | null;

}
