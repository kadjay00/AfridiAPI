import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAG', {schema: 'dbo' } )
export class T_TAG {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'TAG_IDNUMBER_C',
        })
    public TAG_IDNUMBER_C: string;

    @Column('datetime', {
        nullable: true,
        name: 'TAG_DATE_D',
        })
    public TAG_DATE_D: Date | null;

}
