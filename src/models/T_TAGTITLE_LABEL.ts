import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGTITLE_LABEL', {schema: 'dbo' } )
export class T_TAGTITLE_LABEL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'TTL_TITLECODE_C',
        })
    public TTL_TITLECODE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'TTL_LANCODE_C',
        })
    public TTL_LANCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'TTL_DESCR_C',
        })
    public TTL_DESCR_C: string | null;

}
