import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_ITEMREMARK_CODE', {schema: 'dbo' } )
export class T_CO_ITEMREMARK_CODE {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'IRC_REMARKID_N',
        })
    public IRC_REMARKID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'IRC_DESCRIPFRA_C',
        })
    public IRC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'IRC_DESCRIPNED_C',
        })
    public IRC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'IRC_RFDESCRIPFRA_C',
        })
    public IRC_RFDESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'IRC_RFDESCRIPNED_C',
        })
    public IRC_RFDESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'IRC_ACTION_C',
        })
    public IRC_ACTION_C: string | null;

}
