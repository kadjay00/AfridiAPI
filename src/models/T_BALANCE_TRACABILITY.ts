import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_TRACABILITY', {schema: 'dbo' } )
export class T_BALANCE_TRACABILITY {

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'BTR_LOTNUMBER_C',
        })
    public BTR_LOTNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'BTR_LOTDO_DAT',
        })
    public BTR_LOTDO_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'BTR_IDNUMBER_C',
        })
    public BTR_IDNUMBER_C: string;

    @Column('int', {
        nullable: false,
        name: 'BTR_PRODUCTPLU_N',
        })
    public BTR_PRODUCTPLU_N: number;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'BTR_EANCODE_N',
        })
    public BTR_EANCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'BTR_SUPPLIERID_C',
        })
    public BTR_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'BTR_PRODUCTUNIT_C',
        })
    public BTR_PRODUCTUNIT_C: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 6,
        scale: 3,
        name: 'BTR_LOTMAX_N',
        })
    public BTR_LOTMAX_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'BTR_LOTDLV_DAT',
        })
    public BTR_LOTDLV_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'BTR_LOTDR_DAT',
        })
    public BTR_LOTDR_DAT: Date | null;

    @Column('int', {
        nullable: false,
        name: 'BTR_SCALEGROUP_N',
        })
    public BTR_SCALEGROUP_N: number;

    @Column('int', {
        nullable: false,
        name: 'BTR_SCALENUMBER_N',
        })
    public BTR_SCALENUMBER_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'BTR_CREATED_DAT',
        })
    public BTR_CREATED_DAT: Date | null;

    @PrimaryGeneratedColumn({
        type: 'numeric',
       // scale:0,
        name: 'BTR_IDENTITY_N',
        })
    public BTR_IDENTITY_N: number;

}
