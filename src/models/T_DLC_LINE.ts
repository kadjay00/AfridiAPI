import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DLC_LINE', {schema: 'dbo' } )
export class T_DLC_LINE {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'DLL_DATA_DAT',
        })
    public DLL_DATA_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'DLL_IDNUMBER_C',
        })
    public DLL_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'DLL_DLC_DAT',
        })
    public DLL_DLC_DAT: Date | null;

    @Column('tinyint', {
        nullable: true,
        name: 'DLL_CHARTER_N',
        })
    public DLL_CHARTER_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'DLL_DELTA_N',
        })
    public DLL_DELTA_N: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'DLL_STOCK_D',
        })
    public DLL_STOCK_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'DLL_TREATED_C',
        })
    public DLL_TREATED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'DLL_CTRLRUPT_C',
        })
    public DLL_CTRLRUPT_C: string | null;

}
