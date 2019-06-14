import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REFRESHLOG', {schema: 'dbo' } )
export class T_REFRESHLOG {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'RFR_IDENTITY_N',
        })
    public RFR_IDENTITY_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'RFR_IDNUMBER_C',
        })
    public RFR_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'RFR_CODE_C',
        })
    public RFR_CODE_C: string;

    @Column('int', {
        nullable: false,
        name: 'RFR_DEPARTMENT_N',
        })
    public RFR_DEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 7,
        name: 'RFR_GIBREF_C',
        })
    public RFR_GIBREF_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RFR_FIELD_C',
        })
    public RFR_FIELD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RFR_VALUEBEFORE_C',
        })
    public RFR_VALUEBEFORE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'RFR_VALUEAFTER_C',
        })
    public RFR_VALUEAFTER_C: string | null;

}
