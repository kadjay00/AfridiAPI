import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKHISTO', {schema: 'dbo' } )
@Index('IX_IDNUMBEREFFECT', ['SMH_IDNUMBER_C', 'SMH_EFFECT_DAT'])
@Index('IX_LOTID', ['SMH_LOTID_N'])
export class T_STOCKHISTO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SMH_IDNUMBER_C',
        })
    public SMH_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'SMH_EFFECT_DAT',
        })
    public SMH_EFFECT_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMH_LOTID_N',
        })
    public SMH_LOTID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMH_MVTID_N',
        })
    public SMH_MVTID_N: number;

    @Column('int', {
        nullable: false,
        name: 'SMH_MVTKIND_N',
        })
    public SMH_MVTKIND_N: number;

    @Column('int', {
        nullable: false,
        name: 'SMH_MVTTYPE_N',
        })
    public SMH_MVTTYPE_N: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'SMH_QTYBEFORE_D',
        })
    public SMH_QTYBEFORE_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'SMH_QTYMVT_D',
        })
    public SMH_QTYMVT_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'SMH_QTY_D',
        })
    public SMH_QTY_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 10,
        scale: 3,
        name: 'SMH_PFBEFORE_D',
        })
    public SMH_PFBEFORE_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 10,
        scale: 3,
        name: 'SMH_PFMVT_D',
        })
    public SMH_PFMVT_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 10,
        scale: 3,
        name: 'SMH_PF_D',
        })
    public SMH_PF_D: number;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SMH_PRICECURRENCY_C',
        })
    public SMH_PRICECURRENCY_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SMH_FLAG1_C',
        })
    public SMH_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SMH_FLAG2_C',
        })
    public SMH_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SMH_FLAG3_C',
        })
    public SMH_FLAG3_C: string | null;

}
