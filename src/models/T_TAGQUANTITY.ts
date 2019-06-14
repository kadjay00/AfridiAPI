import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGQUANTITY', {schema: 'dbo' } )
export class T_TAGQUANTITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'TQU_IDNUMBER_C',
        })
    public TQU_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'TQU_FORMAT_C',
        })
    public TQU_FORMAT_C: string;

    @Column('int', {
        nullable: true,
        name: 'TQU_QUANTITY_N',
        })
    public TQU_QUANTITY_N: number | null;

}
