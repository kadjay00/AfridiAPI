import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_IMOVEDATA_RECON_DELAYED', {schema: 'dbo' } )
export class T_IMOVEDATA_RECON_DELAYED {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'IDD_AJUSTEMENTID_N',
        })
    public IDD_AJUSTEMENTID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IDD_SEQUENCE_N',
        })
    public IDD_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'IDD_IDNUMBER_C',
        })
    public IDD_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'IDD_UNIT_C',
        })
    public IDD_UNIT_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'IDD_QTY_N',
        })
    public IDD_QTY_N: number;

}
