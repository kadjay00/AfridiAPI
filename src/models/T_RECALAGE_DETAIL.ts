import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECALAGE_DETAIL', {schema: 'dbo' } )
@Index('IX_IDNUMBER', ['RDE_IDNUMBER_C'])
@Index('IX_RDE_IDGESTION', ['RDE_REPRISE_N', 'RDE_IDGESTION_C'])
export class T_RECALAGE_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'RDE_RECALAGE_N',
        })
    public RDE_RECALAGE_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'RDE_IDNUMBER_C',
        })
    public RDE_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'RDE_COUNTED_N',
        })
    public RDE_COUNTED_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'RDE_COUNTED_FLAG',
        })
    public RDE_COUNTED_FLAG: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'RDE_STOCKATVALIDATION_N',
        })
    public RDE_STOCKATVALIDATION_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RDE_REPRISE_N',
        })
    public RDE_REPRISE_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'RDE_RECORD_N',
        })
    public RDE_RECORD_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'RDE_IDGESTION_C',
        })
    public RDE_IDGESTION_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'RDE_QTYCOEFF_D',
        })
    public RDE_QTYCOEFF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'RDE_LOCALSUPCODE_C',
        })
    public RDE_LOCALSUPCODE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'RDE_VARPROMO_C',
        })
    public RDE_VARPROMO_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 80,
        name: 'RDE_COMMENT_C',
        })
    public RDE_COMMENT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'RDE_USERID_C',
        })
    public RDE_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'RDE_DATE_DAT',
        })
    public RDE_DATE_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'RDE_COSTPRICE_D',
        })
    public RDE_COSTPRICE_D: number | null;

}
