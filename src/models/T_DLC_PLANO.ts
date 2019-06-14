import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DLC_PLANO', {schema: 'dbo' } )
export class T_DLC_PLANO {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'DLP_DATA_DAT',
        })
    public DLP_DATA_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'DLP_IDNUMBER_C',
        })
    public DLP_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'DLP_TREATED_DAT',
        })
    public DLP_TREATED_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 15,
        name: 'DLP_PLAN_ID_C',
        })
    public DLP_PLAN_ID_C: string;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'DLP_USERID_C',
        })
    public DLP_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'DLP_INPUT_DAT',
        })
    public DLP_INPUT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'DLP_DLC_DAT',
        })
    public DLP_DLC_DAT: Date | null;

}
