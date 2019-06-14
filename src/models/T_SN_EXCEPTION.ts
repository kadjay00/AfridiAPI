import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SN_EXCEPTION', {schema: 'dbo' } )
export class T_SN_EXCEPTION {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SNE_ID_N',
        })
    public SNE_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'SNE_IDNUMBER_C',
        })
    public SNE_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'SNE_EXCEPTIONSTATUS_C',
        })
    public SNE_EXCEPTIONSTATUS_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'SNE_GLOBALSTOCK_D',
        })
    public SNE_GLOBALSTOCK_D: number | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNE_COSTORE_C',
        })
    public SNE_COSTORE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SNE_CODEPOT_C',
        })
    public SNE_CODEPOT_C: string | null;

}
