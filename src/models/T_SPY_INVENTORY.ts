import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_INVENTORY', {schema: 'dbo' } )
export class T_SPY_INVENTORY {

    @PrimaryGeneratedColumn({
        type: 'numeric',
       // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_DATE_DAT',
        })
    public SPY_DATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'SPY_INVENTORY_N',
        })
    public SPY_INVENTORY_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'SPY_TYPE_C',
        })
    public SPY_TYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPY_MESSAGE_C',
        })
    public SPY_MESSAGE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPY_LOGIN_C',
        })
    public SPY_LOGIN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPY_HOST_C',
        })
    public SPY_HOST_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 75,
        name: 'SPY_ORIGIN_C',
        })
    public SPY_ORIGIN_C: string | null;

}
