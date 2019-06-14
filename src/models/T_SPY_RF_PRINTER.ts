import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_RF_PRINTER', {schema: 'dbo' } )
export class T_SPY_RF_PRINTER {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:12,
        // scale:0,
        name: 'SPY_ID_N',
        })
    public SPY_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'SPY_DATE_DAT',
        })
    public SPY_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SPY_ACTION_C',
        })
    public SPY_ACTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'SPY_PRINTERID_C',
        })
    public SPY_PRINTERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_TYPE_OLD_C',
        })
    public SPY_TYPE_OLD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_TYPE_NEW_C',
        })
    public SPY_TYPE_NEW_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_LOGIN_C',
        })
    public SPY_LOGIN_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPY_HOST_C',
        })
    public SPY_HOST_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SPY_APPNAME_C',
        })
    public SPY_APPNAME_C: string | null;

}
