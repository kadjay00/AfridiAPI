import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ISB_PARTITIONSTATUS', {schema: 'dbo' } )
export class T_ISB_PARTITIONSTATUS {

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'IPS_DOUGHID_N',
        })
    public IPS_DOUGHID_N: number;

    @Column('char', {
        nullable: true,
        name: 'IPS_STATUS_C',
        })
    public IPS_STATUS_C: string | null;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'IPS_ID_N',
        })
    public IPS_ID_N: number;

}
