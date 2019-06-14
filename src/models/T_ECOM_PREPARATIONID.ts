import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ECOM_PREPARATIONID', {schema: 'dbo' } )
export class T_ECOM_PREPARATIONID {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'ECP_PREPARATION_DAT',
        })
    public ECP_PREPARATION_DAT: Date;

    @Column('smallint', {
        nullable: false,
        name: 'ECP_PREPARATIONID_N',
        })
    public ECP_PREPARATIONID_N: number;

}
