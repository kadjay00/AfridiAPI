import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELFSCAN_MESSAGETYPE', {schema: 'dbo' } )
export class T_SELFSCAN_MESSAGETYPE {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SMT_SUBDEPARTMENT_N',
        })
    public SMT_SUBDEPARTMENT_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'SMT_SALESFAMILY_C',
        })
    public SMT_SALESFAMILY_C: string;

    @Column('int', {
        nullable: false,
        name: 'SMT_MESSAGETYPE_N',
        })
    public SMT_MESSAGETYPE_N: number;

}
