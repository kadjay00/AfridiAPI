import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MOTMAO', {schema: 'dbo' } )
export class T_MOTMAO {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 6,
        name: 'MOT_STOREID_C',
        })
    public MOT_STOREID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'MOT_TYPE_C',
        })
    public MOT_TYPE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 15,
        name: 'MOT_ENSEIGNE_C',
        })
    public MOT_ENSEIGNE_C: string;

}
