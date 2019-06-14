import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_WORK_LOGBOOK', {schema: 'dbo' } )
export class T_WORK_LOGBOOK {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'WLB_IDNUMBER_C',
        })
    public WLB_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'WLB_QTY_D',
        })
    public WLB_QTY_D: number | null;

}
