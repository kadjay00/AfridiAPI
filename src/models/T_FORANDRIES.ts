import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORANDRIES', {schema: 'dbo' } )
export class T_FORANDRIES {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'FAN_ID_C',
        })
    public FAN_ID_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 8,
        scale: 4,
        name: 'FAN_VALUE_D',
        })
    public FAN_VALUE_D: number;

}
