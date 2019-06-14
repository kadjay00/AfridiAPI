import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKLOTREQUEST', {schema: 'dbo' } )
export class T_STOCKLOTREQUEST {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SLR_ID_N',
        })
    public SLR_ID_N: number;

    @Column('int', {
        nullable: false,
        name: 'SLR_MVTKIND_N',
        })
    public SLR_MVTKIND_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'SLR_REQUEST_DAT',
        })
    public SLR_REQUEST_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SLR_USERID_C',
        })
    public SLR_USERID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 32,
        name: 'SLR_SOURCEID_C',
        })
    public SLR_SOURCEID_C: string;

    @Column('char', {
        nullable: false,
        name: 'SLR_LOTCREATED_C',
        })
    public SLR_LOTCREATED_C: string;

    @Column('int', {
        nullable: false,
        name: 'SLR_ATTEMPT_N',
        })
    public SLR_ATTEMPT_N: number;

    @Column('char', {
        nullable: true,
        name: 'SLR_FLAG1_C',
        })
    public SLR_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SLR_FLAG2_C',
        })
    public SLR_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SLR_FLAG3_C',
        })
    public SLR_FLAG3_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SLR_EFFECTDATE_DAT',
        })
    public SLR_EFFECTDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SLR_LOTID_N',
        })
    public SLR_LOTID_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'SLR_LOTIDRF_N',
        })
    public SLR_LOTIDRF_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'SLR_STATUS_C',
        })
    public SLR_STATUS_C: string | null;

}
