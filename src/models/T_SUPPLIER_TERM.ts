import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SUPPLIER_TERM', {schema: 'dbo' } )
export class T_SUPPLIER_TERM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 4,
        name: 'TRM_TERM_C',
        })
    public TRM_TERM_C: string;

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'TRM_LAN_C',
        })
    public TRM_LAN_C: string;

    @Column('varchar', {
        nullable: true,
        length: 35,
        name: 'TRM_DESCR_C',
        })
    public TRM_DESCR_C: string | null;

}
