import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {T_RF_SCREEN_ACTION} from './T_RF_SCREEN_ACTION';

@Entity('T_RF_SCREEN', {schema: 'dbo' } )
export class T_RF_SCREEN {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SCR_SCREENID_N',
        })
    public SCR_SCREENID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SCR_SCREEN_C',
        })
    public SCR_SCREEN_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SCR_DESCRIPTION_C',
        })
    public SCR_DESCRIPTION_C: string | null;

    @Column('char', {
        nullable: false,
        name: 'SCR_TYPE_C',
        })
    public SCR_TYPE_C: string;

    @Column('int', {
        nullable: true,
        name: 'SCR_TITLEID_N',
        })
    public SCR_TITLEID_N: number | null;

    @OneToMany(type => T_RF_SCREEN_ACTION, t_RF_SCREEN_ACTION => t_RF_SCREEN_ACTION.scaScreenidN)
    public tRfScreenActions: T_RF_SCREEN_ACTION[];

}
