import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('t_switchdepot', {schema: 'dbo' } )
export class t_switchdepot {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'SWD_DATE_DAT',
        })
    public SWD_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SWD_SUBDEPARTMENT_N',
        })
    public SWD_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SWD_DEPOTFROM_N',
        })
    public SWD_DEPOTFROM_N: number;

    @Column('char', {
        nullable: true,
        name: 'SWD_TREATED_FLAG',
        })
    public SWD_TREATED_FLAG: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SWD_ENTERED_DAT',
        })
    public SWD_ENTERED_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'swd_treated_dat',
        })
    public swd_treated_dat: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SWD_DEPOTTO_N',
        })
    public SWD_DEPOTTO_N: number | null;

}
