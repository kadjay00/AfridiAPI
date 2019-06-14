import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_LANGUAGECODE', {schema: 'dbo' } )
export class T_SUPPLIER_LANGUAGECODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'SLA_LANGUAGECODE_C',
        })
    public SLA_LANGUAGECODE_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'SLA_LAN_C',
        })
    public SLA_LAN_C: string;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'SLA_DESCR_C',
        })
    public SLA_DESCR_C: string | null;

}
