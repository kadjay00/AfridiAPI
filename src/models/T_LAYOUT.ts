import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LAYOUT', {schema: 'dbo' } )
export class T_LAYOUT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LAY_KEYID_N',
        })
    public LAY_KEYID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'LAY_IDNUMBER_C',
        })
    public LAY_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'LAY_DESCRIPFRA_C',
        })
    public LAY_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'LAY_DESCRIPNED_C',
        })
    public LAY_DESCRIPNED_C: string | null;

}
