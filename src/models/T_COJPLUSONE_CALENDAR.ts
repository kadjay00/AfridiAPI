import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COJPLUSONE_CALENDAR', {schema: 'dbo' } )
export class T_COJPLUSONE_CALENDAR {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'CJC_CALCUL_DAT',
        })
    public CJC_CALCUL_DAT: Date;

    @Column('datetime', {
        nullable: false,
        name: 'CJC_CALENDAR_DAT',
        })
    public CJC_CALENDAR_DAT: Date;

}
