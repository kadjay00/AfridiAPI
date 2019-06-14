import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_NUTRITION', {schema: 'dbo' } )
export class T_BALANCE_NUTRITION {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BNU_IDNUMBER_C',
        })
    public BNU_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'BNU_LANCODE_C',
        })
    public BNU_LANCODE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BNU_LINENBR_N',
        })
    public BNU_LINENBR_N: number;

    @Column('varchar', {
        nullable: true,
        name: 'BNU_DESCRIPTION_C',
        })
    public BNU_DESCRIPTION_C: string | null;

}
