import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PC_ITEMREMARK', {schema: 'dbo' } )
export class T_PC_ITEMREMARK {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'PIR_CONTROL_DAT',
        })
    public PIR_CONTROL_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'PIR_IDNUMBER_C',
        })
    public PIR_IDNUMBER_C: string;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'PIR_REMARKID_N',
        })
    public PIR_REMARKID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PIR_PROMONBR_N',
        })
    public PIR_PROMONBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PIR_VALUE1_C',
        })
    public PIR_VALUE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PIR_VALUE2_C',
        })
    public PIR_VALUE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'PIR_VALUE3_C',
        })
    public PIR_VALUE3_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PIR_DATE_DAT',
        })
    public PIR_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'PIR_USERID_C',
        })
    public PIR_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'PIR_PDT_C',
        })
    public PIR_PDT_C: string | null;

}
