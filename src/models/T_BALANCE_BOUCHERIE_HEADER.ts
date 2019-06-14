import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_BOUCHERIE_HEADER', {schema: 'dbo' } )
export class T_BALANCE_BOUCHERIE_HEADER {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BBH_ID_N',
        })
    public BBH_ID_N: number;

    @Column('int', {
        nullable: false,
        name: 'BBH_BALID_N',
        })
    public BBH_BALID_N: number;

    @Column('int', {
        nullable: false,
        name: 'BBH_BALGROUP_N',
        })
    public BBH_BALGROUP_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'BBH_ACTIONDATE_DAT',
        })
    public BBH_ACTIONDATE_DAT: Date;

    @Column('char', {
        nullable: false,
        name: 'BBH_ACTION_C',
        })
    public BBH_ACTION_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'BBH_EXPORT_DAT',
        })
    public BBH_EXPORT_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'BBH_SESSION_N',
        })
    public BBH_SESSION_N: number | null;

}
