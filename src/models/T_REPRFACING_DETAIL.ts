import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRFACING_DETAIL', {schema: 'dbo' } )
export class T_REPRFACING_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 10,
        scale: 0,
        name: 'RFD_REPRFACING_N',
        })
    public RFD_REPRFACING_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'RFD_IDNUMBER_C',
        })
    public RFD_IDNUMBER_C: string;

    @Column('int', {
        nullable: true,
        name: 'RFD_HORFACING_N',
        })
    public RFD_HORFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RFD_VERTFACING_N',
        })
    public RFD_VERTFACING_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RFD_HORFACINGORIG_N',
        })
    public RFD_HORFACINGORIG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RFD_VERTFACINGORIG_N',
        })
    public RFD_VERTFACINGORIG_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RFD_RECORD_N',
        })
    public RFD_RECORD_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'RFD_SALESCOEFF_D',
        })
    public RFD_SALESCOEFF_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'RFD_SALESCOEFFORIG_D',
        })
    public RFD_SALESCOEFFORIG_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'RFD_HFACINGBLOCKED_C',
        })
    public RFD_HFACINGBLOCKED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RFD_VFACINGBLOCKED_C',
        })
    public RFD_VFACINGBLOCKED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RFD_SALESCOEFFBLOCKED_C',
        })
    public RFD_SALESCOEFFBLOCKED_C: string | null;

}
