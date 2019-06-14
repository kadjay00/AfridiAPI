import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_COJPLUSONE', {schema: 'dbo' } )
export class T_COJPLUSONE {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'CJP_ID_N',
        })
    public CJP_ID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'CJP_CALCUL_DAT',
        })
    public CJP_CALCUL_DAT: Date;

    @Column('numeric', {
        nullable: false,
        precision: 3,
        scale: 0,
        name: 'CJP_MANAGER_N',
        })
    public CJP_MANAGER_N: number;

}
