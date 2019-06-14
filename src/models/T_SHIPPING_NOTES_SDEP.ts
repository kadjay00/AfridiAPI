import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SHIPPING_NOTES_SDEP', {schema: 'dbo' } )
export class T_SHIPPING_NOTES_SDEP {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'SHS_SHIPPINGNOTE_N',
        })
    public SHS_SHIPPINGNOTE_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SHS_SUBDEPARTMENT_N',
        })
    public SHS_SUBDEPARTMENT_N: number;

}
