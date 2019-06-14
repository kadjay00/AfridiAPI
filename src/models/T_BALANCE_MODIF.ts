import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_MODIF', {schema: 'dbo' } )
export class T_BALANCE_MODIF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'bmo_id_n',
        })
    public bmo_id_n: number;

    @Column('numeric', {
        nullable: false,
        scale: 0,
        name: 'bmo_groupid_n',
        })
    public bmo_groupid_n: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'bmo_idnumber_c',
        })
    public bmo_idnumber_c: string;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'bmo_sessionid_n',
        })
    public bmo_sessionid_n: number | null;

}
