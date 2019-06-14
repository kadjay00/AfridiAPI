import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SN_ITEM', {schema: 'dbo' } )
export class T_SN_ITEM {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SNI_ID_N',
        })
    public SNI_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SNI_IDNUMBER_C',
        })
    public SNI_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'SNI_VARTYPE_C',
        })
    public SNI_VARTYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'SNI_ACTIVE_C',
        })
    public SNI_ACTIVE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SNI_IDGESTION_C',
        })
    public SNI_IDGESTION_C: string;

    @Column('int', {
        nullable: true,
        name: 'SNI_AVERAGEWEEK_N',
        })
    public SNI_AVERAGEWEEK_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SNI_STOCK_D',
        })
    public SNI_STOCK_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 5,
        scale: 2,
        name: 'SNI_QTYCOEFF_D',
        })
    public SNI_QTYCOEFF_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SNI_LASTSOLD_DAT',
        })
    public SNI_LASTSOLD_DAT: Date | null;

}
