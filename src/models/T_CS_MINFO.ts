import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CS_MINFO', {schema: 'dbo' } )
export class T_CS_MINFO {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CMI_REPORTID_N',
        })
    public CMI_REPORTID_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMI_YEAR_N',
        })
    public CMI_YEAR_N: number;

    @Column('tinyint', {
        nullable: false,
        name: 'CMI_WEEK_N',
        })
    public CMI_WEEK_N: number;

    @Column('smallint', {
        nullable: false,
        name: 'CMI_DEPARTMENT_N',
        })
    public CMI_DEPARTMENT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'CMI_DATEFROM_DAT',
        })
    public CMI_DATEFROM_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'CMI_DATETO_DAT',
        })
    public CMI_DATETO_DAT: Date | null;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'CMI_FCVV_C',
        })
    public CMI_FCVV_C: string;

}
