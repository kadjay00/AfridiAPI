import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COJPLUSONE_EXCEPTION', {schema: 'dbo' } )
export class T_COJPLUSONE_EXCEPTION {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CJE_ID_N',
        })
    public CJE_ID_N: number;

    @Column('char', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'CJE_IDNUMBER_C',
        })
    public CJE_IDNUMBER_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'CJE_EXCEPTION_STATUS_C',
        })
    public CJE_EXCEPTION_STATUS_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'CJE_GLOBALSTOCK_D',
        })
    public CJE_GLOBALSTOCK_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'CJE_COSTORE_C',
        })
    public CJE_COSTORE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'CJE_CODEPOT_C',
        })
    public CJE_CODEPOT_C: string | null;

}
