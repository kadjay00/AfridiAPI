import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_SECURITY', {schema: 'dbo' } )
export class T_SPY_SECURITY {

    @PrimaryGeneratedColumn({
        type: 'decimal',
        // precision:10,
        // scale:0,
        name: 'SPS_SPYID_N',
        })
    public SPS_SPYID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPS_APPNAME_C',
        })
    public SPS_APPNAME_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPS_DATE_DAT',
        })
    public SPS_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPS_USERID_C',
        })
    public SPS_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPS_COMPUTER_C',
        })
    public SPS_COMPUTER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPS_MESSAGETYPE_C',
        })
    public SPS_MESSAGETYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 1000,
        name: 'SPS_MESSAGETEXT_C',
        })
    public SPS_MESSAGETEXT_C: string | null;

}
