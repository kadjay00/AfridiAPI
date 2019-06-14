import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_REASON', {schema: 'dbo' } )
export class T_STAFF_REASON {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'REA_REASON_N',
        })
    public REA_REASON_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'REA_DESCRIPNED_C',
        })
    public REA_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'REA_DESCRIPFRA_C',
        })
    public REA_DESCRIPFRA_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_FLAG1_C',
        })
    public REA_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_FLAG2_C',
        })
    public REA_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_FLAG3_C',
        })
    public REA_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_FLAG4_C',
        })
    public REA_FLAG4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_FLAG5_C',
        })
    public REA_FLAG5_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_PRESENCE_C',
        })
    public REA_PRESENCE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'REA_COUNTER_C',
        })
    public REA_COUNTER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'REA_DESCRIPSIG_C',
        })
    public REA_DESCRIPSIG_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'REA_DESCRIPFRA_SHORT_C',
        })
    public REA_DESCRIPFRA_SHORT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'REA_DESCRIPNED_SHORT_C',
        })
    public REA_DESCRIPNED_SHORT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'REA_PLANNIF_C',
        })
    public REA_PLANNIF_C: string | null;

}
