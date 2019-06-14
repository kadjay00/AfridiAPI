import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_ERROR', {schema: 'dbo' } )
export class T_REPRISE_ERROR {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ERE_REPRISE_N',
        })
    public ERE_REPRISE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ERE_RECORD_N',
        })
    public ERE_RECORD_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ERE_SEQUENCE_N',
        })
    public ERE_SEQUENCE_N: number;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ERE_ERRORID_C',
        })
    public ERE_ERRORID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 40,
        name: 'ERE_ERRORPARAM_C',
        })
    public ERE_ERRORPARAM_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'ERE_ERRORDATE_DAT',
        })
    public ERE_ERRORDATE_DAT: Date | null;

    @Column('char', {
        nullable: false,
        name: 'ERE_TYPE_C',
        })
    public ERE_TYPE_C: string;

}
