import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_TEL', {schema: 'dbo' } )
export class T_STAFF_TEL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'TEL_STAFFID_N',
        })
    public TEL_STAFFID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 20,
        name: 'TEL_TELDESCR_C',
        })
    public TEL_TELDESCR_C: string;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'TEL_TELNUM_C',
        })
    public TEL_TELNUM_C: string | null;

}
