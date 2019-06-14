import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKITEM', {schema: 'dbo' } )
export class T_STOCKITEM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'STI_IDNUMBER_C',
        })
    public STI_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'STI_STOCK_D',
        })
    public STI_STOCK_D: number;

    @Column('datetime', {
        nullable: false,
        name: 'STI_STOCKMOD_DAT',
        })
    public STI_STOCKMOD_DAT: Date;

    @Column('decimal', {
        nullable: false,
        precision: 10,
        scale: 3,
        name: 'STI_PF_D',
        })
    public STI_PF_D: number;

    @Column('datetime', {
        nullable: true,
        name: 'STI_LASTRECEPT_DAT',
        })
    public STI_LASTRECEPT_DAT: Date | null;

    @Column('decimal', {
        nullable: true,
        precision: 10,
        scale: 3,
        name: 'STI_LASTRECEPTPF_D',
        })
    public STI_LASTRECEPTPF_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'STI_LASTINVENT_DAT',
        })
    public STI_LASTINVENT_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'STI_LASTADJUST_DAT',
        })
    public STI_LASTADJUST_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'STI_FLAG1_C',
        })
    public STI_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STI_FLAG2_C',
        })
    public STI_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'STI_FLAG3_C',
        })
    public STI_FLAG3_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'STI_STOCKFINAL_D',
        })
    public STI_STOCKFINAL_D: number | null;

}
