import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {T_RF_SCREEN_ACTION} from './T_RF_SCREEN_ACTION';

@Entity('T_RF_SCREEN_ACTION_PROFILE', {schema: 'dbo' } )
export class T_RF_SCREEN_ACTION_PROFILE {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SCP_PROFILEID_N',
        })
    public SCP_PROFILEID_N: number;

    @ManyToOne(type => T_RF_SCREEN_ACTION, t_RF_SCREEN_ACTION => t_RF_SCREEN_ACTION.tRfScreenActionProfiles, {  nullable: false })
    @JoinColumn({ name: 'SCP_ACTIONID_N'})
    public scpActionidN: T_RF_SCREEN_ACTION | null;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'SCP_PROFILE_C',
        })
    public SCP_PROFILE_C: string;

    @Column('char', {
        nullable: false,
        name: 'SCP_MODE_C',
        })
    public SCP_MODE_C: string;

}
