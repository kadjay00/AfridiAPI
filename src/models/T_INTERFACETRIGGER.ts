import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACETRIGGER', {schema: 'dbo' } )
@Index('IX_INTERFACETRIGGER_PKINDEX', ['IFT_INTERFACETABLE_C', 'IFT_TRIGGERFIELD_C'], {unique: true})
export class T_INTERFACETRIGGER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'IFT_INTERFACETABLE_C',
        })
    public IFT_INTERFACETABLE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 40,
        name: 'IFT_TRIGGERFIELD_C',
        })
    public IFT_TRIGGERFIELD_C: string;

    @Column('char', {
        nullable: true,
        name: 'IFT_POSINTERFACE_C',
        })
    public IFT_POSINTERFACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_LABELINTERFACE_C',
        })
    public IFT_LABELINTERFACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_BALANCEINTERFACE_C',
        })
    public IFT_BALANCEINTERFACE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_INTERFACE4_C',
        })
    public IFT_INTERFACE4_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_INTERFACE5_C',
        })
    public IFT_INTERFACE5_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_INTERFACE6_C',
        })
    public IFT_INTERFACE6_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_INTERFACE7_C',
        })
    public IFT_INTERFACE7_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_INTERFACE8_C',
        })
    public IFT_INTERFACE8_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_ASAPNIGHT_C',
        })
    public IFT_ASAPNIGHT_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'IFT_USERID_C',
        })
    public IFT_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'IFT_RFIDINTERFACE_C',
        })
    public IFT_RFIDINTERFACE_C: string | null;

}
