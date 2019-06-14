import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PC_ITEMREMARK_CODE', {schema: 'dbo' } )
export class T_PC_ITEMREMARK_CODE {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'PIC_REMARKID_N',
        })
    public PIC_REMARKID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'PIC_DESCRIPFRA_C',
        })
    public PIC_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'PIC_DESCRIPNED_C',
        })
    public PIC_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'PIC_RFDESCRIPFRA_C',
        })
    public PIC_RFDESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 20,
        name: 'PIC_RFDESCRIPNED_C',
        })
    public PIC_RFDESCRIPNED_C: string;

    @Column('char', {
        nullable: false,
        name: 'PIC_TYPE_C',
        })
    public PIC_TYPE_C: string;

    @Column('char', {
        nullable: false,
        name: 'PIC_SOLUTIONSPOT_C',
        })
    public PIC_SOLUTIONSPOT_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PIC_VALUE1_C',
        })
    public PIC_VALUE1_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PIC_VALUE2_C',
        })
    public PIC_VALUE2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PIC_VALUE3_C',
        })
    public PIC_VALUE3_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PIC_ACTION_C',
        })
    public PIC_ACTION_C: string | null;

}
