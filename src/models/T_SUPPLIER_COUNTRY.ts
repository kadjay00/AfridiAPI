import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_COUNTRY', {schema: 'dbo' } )
export class T_SUPPLIER_COUNTRY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'COU_COUNTRY_C',
        })
    public COU_COUNTRY_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'COU_LAN_C',
        })
    public COU_LAN_C: string;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'COU_DESCR_C',
        })
    public COU_DESCR_C: string | null;

}
