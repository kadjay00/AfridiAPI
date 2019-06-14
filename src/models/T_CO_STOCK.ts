import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_STOCK', {schema: 'dbo' } )
export class T_CO_STOCK {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'COS_ID_N',
        })
    public COS_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'COS_EXCEPTIONDATE_DAT',
        })
    public COS_EXCEPTIONDATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'COS_IDNUMBER_C',
        })
    public COS_IDNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'COS_SPOT_C',
        })
    public COS_SPOT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'COS_STOCK_D',
        })
    public COS_STOCK_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'COS_TYPE_C',
        })
    public COS_TYPE_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'COS_DATE_DAT',
        })
    public COS_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'COS_USERID_C',
        })
    public COS_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'COS_PDT_C',
        })
    public COS_PDT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'COS_CO_C',
        })
    public COS_CO_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'COS_LOTID_N',
        })
    public COS_LOTID_N: number | null;

}
