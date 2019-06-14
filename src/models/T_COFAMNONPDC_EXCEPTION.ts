import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COFAMNONPDC_EXCEPTION', {schema: 'dbo' } )
export class T_COFAMNONPDC_EXCEPTION {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'COE_ID_N',
        })
    public COE_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'COE_IDNUMBER_C',
        })
    public COE_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'COE_EXCEPTION_STATUS_C',
        })
    public COE_EXCEPTION_STATUS_C: string;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'COE_GLOBALSTOCK_D',
        })
    public COE_GLOBALSTOCK_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'COE_COSTORE_C',
        })
    public COE_COSTORE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'COE_CODEPOT_C',
        })
    public COE_CODEPOT_C: string | null;

}
