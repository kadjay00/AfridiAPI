import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_AJUSTEMENT_DETAIL', {schema: 'dbo' } )
@Index('IX_IDNUMBER', ['AJD_IDNUMBER_C'])
export class T_AJUSTEMENT_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'AJD_AJUSTEMENTID_N',
        })
    public AJD_AJUSTEMENTID_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'AJD_SEQUENCE_N',
        })
    public AJD_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'AJD_IDNUMBER_C',
        })
    public AJD_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'AJD_MOTIF_C',
        })
    public AJD_MOTIF_C: string;

    @Column('numeric', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'AJD_QTY_N',
        })
    public AJD_QTY_N: number;

    @Column('char', {
        nullable: true,
        name: 'AJD_FLAG1_C',
        })
    public AJD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'AJD_FLAG2_C',
        })
    public AJD_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'AJD_FLAG3_C',
        })
    public AJD_FLAG3_C: string | null;

}
