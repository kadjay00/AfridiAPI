import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PC_ITEMMP', {schema: 'dbo' } )
export class T_PC_ITEMMP {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PIM_CONTROL_DAT',
        })
    public PIM_CONTROL_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PIM_IDNUMBER_C',
        })
    public PIM_IDNUMBER_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PIM_PROMONBR_N',
        })
    public PIM_PROMONBR_N: number;

    @Column('int', {
        nullable: true,
        name: 'PIM_PROMOTYPE_N',
        })
    public PIM_PROMOTYPE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 18,
        name: 'PIM_POSTEXT1_C',
        })
    public PIM_POSTEXT1_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIM_STARTDATE_DAT',
        })
    public PIM_STARTDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIM_ENDDATE_DAT',
        })
    public PIM_ENDDATE_DAT: Date | null;

}
