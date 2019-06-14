import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPORT_PARM_ACTIVITY', {schema: 'dbo' } )
export class T_REPORT_PARM_ACTIVITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'RPA_REPORTID_C',
        })
    public RPA_REPORTID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'RPA_GROUP_C',
        })
    public RPA_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'RPA_ACTIVITY_N',
        })
    public RPA_ACTIVITY_N: number;

    @Column('char', {
        nullable: true,
        name: 'RPA_FLAG1_C',
        })
    public RPA_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RPA_FLAG2_C',
        })
    public RPA_FLAG2_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'RPA_VALUE1_N',
        })
    public RPA_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RPA_VALUE2_N',
        })
    public RPA_VALUE2_N: number | null;

}
