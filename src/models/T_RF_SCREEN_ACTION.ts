import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {T_RF_SCREEN} from './T_RF_SCREEN';
import {T_RF_SCREEN_ACTION_PROFILE} from './T_RF_SCREEN_ACTION_PROFILE';

@Entity('T_RF_SCREEN_ACTION', {schema: 'dbo' } )
export class T_RF_SCREEN_ACTION {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SCA_ACTIONID_N',
        })
    public SCA_ACTIONID_N: number;

    @ManyToOne(type => T_RF_SCREEN, t_RF_SCREEN => t_RF_SCREEN.tRfScreenActions, {  nullable: false })
    @JoinColumn({ name: 'SCA_SCREENID_N'})
    public scaScreenidN: T_RF_SCREEN | null;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SCA_ACTION_C',
        })
    public SCA_ACTION_C: string;

    @Column('varchar', {
        nullable: true,
        length: 100,
        name: 'SCA_DESCRIPTION_C',
        })
    public SCA_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SCA_TYPE_C',
        })
    public SCA_TYPE_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'SCA_LABELID_N',
        })
    public SCA_LABELID_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 4,
        name: 'SCA_PARKEY_C',
        })
    public SCA_PARKEY_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 10,
        name: 'SCA_PARTYPE_C',
        })
    public SCA_PARTYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SCA_PARFIELD_C',
        })
    public SCA_PARFIELD_C: string | null;

    @OneToMany(type => T_RF_SCREEN_ACTION_PROFILE, t_RF_SCREEN_ACTION_PROFILE => t_RF_SCREEN_ACTION_PROFILE.scpActionidN)
    public tRfScreenActionProfiles: T_RF_SCREEN_ACTION_PROFILE[];

}
