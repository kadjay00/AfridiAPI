import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STORUHD_DETAIL', {schema: 'dbo' } )
export class T_STORUHD_DETAIL {

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 9,
        scale: 0,
        name: 'HDD_ID_N',
        })
    public HDD_ID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 16,
        name: 'HDD_USERID_C',
        })
    public HDD_USERID_C: string;

    @Column('smallint', {
        nullable: true,
        name: 'HDD_RC_N',
        })
    public HDD_RC_N: number | null;

}
