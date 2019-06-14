import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_RF', {schema: 'dbo' } )
export class T_SPY_RF {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'SPR_SPYID_N',
        })
    public SPR_SPYID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SPR_APPNAME_C',
        })
    public SPR_APPNAME_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPR_DATE_DAT',
        })
    public SPR_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SPR_USERID_C',
        })
    public SPR_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 20,
        name: 'SPR_PDT_C',
        })
    public SPR_PDT_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SPR_MESSAGETYPE_C',
        })
    public SPR_MESSAGETYPE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 250,
        name: 'SPR_MESSAGETEXT_C',
        })
    public SPR_MESSAGETEXT_C: string | null;

}
