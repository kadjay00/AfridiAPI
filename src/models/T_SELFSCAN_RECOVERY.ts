import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELFSCAN_RECOVERY', {schema: 'dbo' } )
export class T_SELFSCAN_RECOVERY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SSR_SESSION_N',
        })
    public SSR_SESSION_N: number;

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'SSR_SESSIONDATE_DAT',
        })
    public SSR_SESSIONDATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SSR_RECORD_N',
        })
    public SSR_RECORD_N: number;

    @Column('numeric', {
        nullable: true,
        precision: 13,
        scale: 0,
        name: 'SSR_EANCODE_N',
        })
    public SSR_EANCODE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SSR_IDNUMBER_C',
        })
    public SSR_IDNUMBER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SSR_ACTION_C',
        })
    public SSR_ACTION_C: string | null;

}
