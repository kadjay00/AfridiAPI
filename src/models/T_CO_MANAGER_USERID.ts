import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_MANAGER_USERID', {schema: 'dbo' } )
export class T_CO_MANAGER_USERID {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'COU_EXCEPTIONDATE_DAT',
        })
    public COU_EXCEPTIONDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'COU_MANAGER_N',
        })
    public COU_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'COU_USERID_C',
        })
    public COU_USERID_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'COU_COLISDATE_DAT',
        })
    public COU_COLISDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'COU_CALENDARDATE_DAT',
        })
    public COU_CALENDARDATE_DAT: Date | null;

}
