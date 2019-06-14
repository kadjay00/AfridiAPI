import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_DR', {schema: 'dbo' } )
export class T_BALANCE_DR {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BDR_IDNUMBER_C',
        })
    public BDR_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'BDR_FORMULATYPE_C',
        })
    public BDR_FORMULATYPE_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 4,
        scale: 0,
        name: 'BDR_WITHDRAWINDEX_N',
        })
    public BDR_WITHDRAWINDEX_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'BDR_WITHDRAWCOEFF_D',
        })
    public BDR_WITHDRAWCOEFF_D: number | null;

    @Column('numeric', {
        nullable: false,
        precision: 4,
        scale: 0,
        name: 'BDR_DRMAXINDEX_N',
        })
    public BDR_DRMAXINDEX_N: number;

}
