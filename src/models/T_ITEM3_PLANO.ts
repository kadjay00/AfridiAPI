import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ITEM3_PLANO', {schema: 'dbo' } )
export class T_ITEM3_PLANO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'ITP_IDNUMBER_C',
        })
    public ITP_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 15,
        name: 'ITP_PLAN_ID_C',
        })
    public ITP_PLAN_ID_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'ITP_MODIFIED_DAT',
        })
    public ITP_MODIFIED_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'ITP_LOCATION_N',
        })
    public ITP_LOCATION_N: number | null;

}
