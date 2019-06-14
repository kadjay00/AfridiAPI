import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CALENDAR_DAYKIND', {schema: 'dbo' } )
export class T_CALENDAR_DAYKIND {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'CDK_TYPE_C',
        })
    public CDK_TYPE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'CDK_STATUS_N',
        })
    public CDK_STATUS_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CDK_DESCRIPFRA_C',
        })
    public CDK_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CDK_DESCRIPNED_C',
        })
    public CDK_DESCRIPNED_C: string | null;

}
