import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SN', {schema: 'dbo' } )
export class T_SN {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SNX_ID_N',
        })
    public SNX_ID_N: number;

    @Column('datetime', {
        nullable: false,
        name: 'SNX_CALCUL_DAT',
        })
    public SNX_CALCUL_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 2,
        name: 'SNX_GROUP_C',
        })
    public SNX_GROUP_C: string;

    @Column('int', {
        nullable: false,
        name: 'SNX_ACTIVITY_N',
        })
    public SNX_ACTIVITY_N: number;

}
