import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COFAMNONPDC', {schema: 'dbo' } )
export class T_COFAMNONPDC {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'COF_ID_N',
        })
    public COF_ID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'COF_CALCUL_DAT',
        })
    public COF_CALCUL_DAT: Date;

    @Column('int', {
        nullable: false,
        name: 'COF_MANAGER_N',
        })
    public COF_MANAGER_N: number;

}
