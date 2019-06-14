import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_REPRISE_MASTER', {schema: 'dbo' } )
export class T_REPRISE_MASTER {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'REM_REPRISE_N',
        })
    public REM_REPRISE_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'REM_REPRISEDATE_DAT',
        })
    public REM_REPRISEDATE_DAT: Date;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'REM_DESCRIPTION_C',
        })
    public REM_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'REM_USER_C',
        })
    public REM_USER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 16,
        name: 'REM_WKS_C',
        })
    public REM_WKS_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'REM_TERMINAL_C',
        })
    public REM_TERMINAL_C: string;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'REM_TYPE_C',
        })
    public REM_TYPE_C: string;

    @Column('int', {
        nullable: false,
        name: 'REM_STATUS_N',
        })
    public REM_STATUS_N: number;

    @Column('int', {
        nullable: true,
        name: 'REM_ORIREPRISE_N',
        })
    public REM_ORIREPRISE_N: number | null;

}
