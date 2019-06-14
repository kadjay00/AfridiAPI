import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKMVT_RF', {schema: 'dbo' } )
@Index('IX_IDNUMBERLOTID_RF', ['SMV_IDNUMBER_C', 'SMV_LOTID_N'])
export class T_STOCKMVT_RF {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMV_LOTID_N',
        })
    public SMV_LOTID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMV_MVTID_N',
        })
    public SMV_MVTID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SMV_IDNUMBER_C',
        })
    public SMV_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'SMV_QTY_D',
        })
    public SMV_QTY_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 10,
        scale: 3,
        name: 'SMV_PF_D',
        })
    public SMV_PF_D: number;

    @Column('int', {
        nullable: false,
        name: 'SMV_MVTTYPE_N',
        })
    public SMV_MVTTYPE_N: number;

    @Column('char', {
        nullable: true,
        name: 'SMV_FLAG1_C',
        })
    public SMV_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SMV_FLAG2_C',
        })
    public SMV_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SMV_FLAG3_C',
        })
    public SMV_FLAG3_C: string | null;

}
