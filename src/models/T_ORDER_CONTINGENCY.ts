import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER_CONTINGENCY', {schema: 'dbo' } )
export class T_ORDER_CONTINGENCY {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'ORC_ID_N',
        })
    public ORC_ID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'ORC_ORDERDT_DAT',
        })
    public ORC_ORDERDT_DAT: Date;

    @Column('int', {
        nullable: false,
        name: 'ORC_HEADER_N',
        })
    public ORC_HEADER_N: number;

    @Column('varchar', {
        nullable: false,
        length: 500,
        name: 'ORC_HOST_C',
        })
    public ORC_HOST_C: string;

    @Column('varchar', {
        nullable: false,
        length: 500,
        name: 'ORC_TARGET_C',
        })
    public ORC_TARGET_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'ORC_CREATION_DAT',
        })
    public ORC_CREATION_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'ORC_STATUS_C',
        })
    public ORC_STATUS_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'ORC_STATUS_DAT',
        })
    public ORC_STATUS_DAT: Date;

    @Column('smallint', {
        nullable: false,
        name: 'ORC_ATTEMPT_N',
        })
    public ORC_ATTEMPT_N: number;

}
