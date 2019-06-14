import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MANAGER', {schema: 'dbo' } )
export class T_MANAGER {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MNG_MANAGER_N',
        })
    public MNG_MANAGER_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'MNG_DESCMANAGER_C',
        })
    public MNG_DESCMANAGER_C: string;

    @Column('char', {
        nullable: true,
        name: 'MNG_CONFIRMATION_C',
        })
    public MNG_CONFIRMATION_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_BLOCKCOEFFVARLOCCOM_C',
        })
    public MNG_BLOCKCOEFFVARLOCCOM_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'MNG_USERID_C',
        })
    public MNG_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'MNG_MODIFIED_DAT',
        })
    public MNG_MODIFIED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_FLAG1_C',
        })
    public MNG_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_FLAG2_C',
        })
    public MNG_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_FLAG3_C',
        })
    public MNG_FLAG3_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_PLANO_C',
        })
    public MNG_PLANO_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_CONFIRMATIONPP_C',
        })
    public MNG_CONFIRMATIONPP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_CONFIRMATIONPPP_C',
        })
    public MNG_CONFIRMATIONPPP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_AUTOPRINTPDCPP_C',
        })
    public MNG_AUTOPRINTPDCPP_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MNG_AUTOPRINTPDCPPP_C',
        })
    public MNG_AUTOPRINTPDCPPP_C: string | null;

}
