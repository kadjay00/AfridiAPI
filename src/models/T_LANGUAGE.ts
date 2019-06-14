import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LANGUAGE', {schema: 'dbo' } )
export class T_LANGUAGE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'LAN_CODE_C',
        })
    public LAN_CODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'LAN_DESCR_C',
        })
    public LAN_DESCR_C: string | null;

}
