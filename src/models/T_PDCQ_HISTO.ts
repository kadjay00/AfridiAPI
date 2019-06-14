import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PDCQ_HISTO', {schema: 'dbo' } )
export class T_PDCQ_HISTO {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'PQH_PDCNUMBER_N',
        })
    public PQH_PDCNUMBER_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'PQH_CALCUL_DAT',
        })
    public PQH_CALCUL_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'PQH_MANAGER_N',
        })
    public PQH_MANAGER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 13,
        name: 'PQH_SUPPLIERID_C',
        })
    public PQH_SUPPLIERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'PQH_LOGISTICGROUP_C',
        })
    public PQH_LOGISTICGROUP_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PQH_DELIVERY_DAT',
        })
    public PQH_DELIVERY_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PQH_NEXTORDER_DAT',
        })
    public PQH_NEXTORDER_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PQH_NEXTDELIVERY_DAT',
        })
    public PQH_NEXTDELIVERY_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PQH_CALLHOUR_C',
        })
    public PQH_CALLHOUR_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'PQH_CONFIRMATION_C',
        })
    public PQH_CONFIRMATION_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'PQH_TOTALAMOUNT_D',
        })
    public PQH_TOTALAMOUNT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PQH_TOTALCOLIS_D',
        })
    public PQH_TOTALCOLIS_D: number | null;

    @Column('int', {
        nullable: true,
        name: 'PQH_PRINTVERSION_N',
        })
    public PQH_PRINTVERSION_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'PQH_VALIDATIONHOUR_C',
        })
    public PQH_VALIDATIONHOUR_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PQH_TOTALREFS_N',
        })
    public PQH_TOTALREFS_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PQH_STATE_C',
        })
    public PQH_STATE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'PQH_HEADER_N',
        })
    public PQH_HEADER_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PQH_USERID_C',
        })
    public PQH_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PQH_MODIFIED_DAT',
        })
    public PQH_MODIFIED_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PQH_QUANTIFTYPE_C',
        })
    public PQH_QUANTIFTYPE_C: string | null;

}
