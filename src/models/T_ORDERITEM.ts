import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDERITEM', {schema: 'dbo' } )
export class T_ORDERITEM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'ORI_IDNUMBER_C',
        })
    public ORI_IDNUMBER_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 9,
        scale: 3,
        name: 'ORI_ENCOURS_D',
        })
    public ORI_ENCOURS_D: number;

    @Column('datetime', {
        nullable: false,
        name: 'ORI_ENCOURSMOD_DAT',
        })
    public ORI_ENCOURSMOD_DAT: Date;

}
