import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACEBALFG', {schema: 'dbo' } )
export class T_INTERFACEBALFG {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'BFG_BALANCEGROUP_C',
        })
    public BFG_BALANCEGROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BFG_IDNUMBER_C',
        })
    public BFG_IDNUMBER_C: string;

    @Column('char', {
        nullable: true,
        name: 'BFG_DELETEFLAG_C',
        })
    public BFG_DELETEFLAG_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'BFG_DEPARTMENT_N',
        })
    public BFG_DEPARTMENT_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'BFG_GIBREF_C',
        })
    public BFG_GIBREF_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'BFG_ACTIVITY_N',
        })
    public BFG_ACTIVITY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'BFG_SALESFAMILY_C',
        })
    public BFG_SALESFAMILY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'BFG_POSDESCRIPNED_C',
        })
    public BFG_POSDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'BFG_POSDESCRIPFRA_C',
        })
    public BFG_POSDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'BFG_CHARACTARISTIC_C',
        })
    public BFG_CHARACTARISTIC_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 2,
        name: 'BFG_ACTIVESELLINGPRICE_D',
        })
    public BFG_ACTIVESELLINGPRICE_D: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'BFG_EANCODE_N',
        })
    public BFG_EANCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'BFG_PRICECURRENCY_C',
        })
    public BFG_PRICECURRENCY_C: string | null;

}
