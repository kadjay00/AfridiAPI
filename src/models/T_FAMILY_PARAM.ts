import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FAMILY_PARAM', {schema: 'dbo' } )
export class T_FAMILY_PARAM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_KEY_C',
        })
    public PAR_KEY_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 35,
        name: 'PAR_TYPE_C',
        })
    public PAR_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'PAR_SUBDEPARTMENT_N',
        })
    public PAR_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'PAR_SALESFAMILY_C',
        })
    public PAR_SALESFAMILY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'PAR_TEXT_C',
        })
    public PAR_TEXT_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 9,
        scale: 3,
        name: 'PAR_VALUE_D',
        })
    public PAR_VALUE_D: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAR_DATE_DAT',
        })
    public PAR_DATE_DAT: Date | null;

}
