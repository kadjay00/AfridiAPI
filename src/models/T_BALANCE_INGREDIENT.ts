import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_INGREDIENT', {schema: 'dbo' } )
export class T_BALANCE_INGREDIENT {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 8,
        name: 'BIN_IDNUMBER_C',
        })
    public BIN_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'BIN_LANCODE_C',
        })
    public BIN_LANCODE_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'BIN_LINENBR_N',
        })
    public BIN_LINENBR_N: number;

    @Column('varchar', {
        nullable: true,
        name: 'BIN_DESCRIPTION_C',
        })
    public BIN_DESCRIPTION_C: string | null;

}
