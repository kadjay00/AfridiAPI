import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_WARNING', {schema: 'dbo' } )
export class T_REPRISE_WARNING {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ERW_REPRISE_N',
        })
    public ERW_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ERW_RECORD_N',
        })
    public ERW_RECORD_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ERW_SEQUENCE_N',
        })
    public ERW_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ERW_ERRORID_C',
        })
    public ERW_ERRORID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ERW_ERRORPARAM_C',
        })
    public ERW_ERRORPARAM_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ERW_ERRORDATE_DAT',
        })
    public ERW_ERRORDATE_DAT: Date | null;

}
