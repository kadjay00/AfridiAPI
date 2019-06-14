import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SN_PARAMCARD', {schema: 'dbo' } )
export class T_SN_PARAMCARD {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'SNP_GROUP_C',
        })
    public SNP_GROUP_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SNP_ACTIVITY_N',
        })
    public SNP_ACTIVITY_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SNP_ACTIVE_DAT',
        })
    public SNP_ACTIVE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SNP_INACTIVE_DAT',
        })
    public SNP_INACTIVE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 7,
        name: 'SNP_PERIODICITY_C',
        })
    public SNP_PERIODICITY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNP_PLANO_C',
        })
    public SNP_PLANO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNP_PDCPFT_C',
        })
    public SNP_PDCPFT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNP_SN_C',
        })
    public SNP_SN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNP_NS_C',
        })
    public SNP_NS_C: string | null;

    @Column('smallint', {
        nullable: true,
        name: 'SNP_NSDAYS_N',
        })
    public SNP_NSDAYS_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'SNP_NSREAPPEARANCE_N',
        })
    public SNP_NSREAPPEARANCE_N: number | null;

}
