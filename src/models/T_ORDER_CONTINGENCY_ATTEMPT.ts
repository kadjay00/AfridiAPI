import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER_CONTINGENCY_ATTEMPT', {schema: 'dbo' } )
export class T_ORDER_CONTINGENCY_ATTEMPT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ORA_ID_N',
        })
    public ORA_ID_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'ORA_ATTEMPT_N',
        })
    public ORA_ATTEMPT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ORA_STATUS_C',
        })
    public ORA_STATUS_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'ORA_STATUS_DAT',
        })
    public ORA_STATUS_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 500,
        name: 'ORA_MESSAGE_C',
        })
    public ORA_MESSAGE_C: string;

}
