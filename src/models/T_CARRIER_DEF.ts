import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CARRIER_DEF', {schema: 'dbo' } )
export class T_CARRIER_DEF {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 18,
        name: 'CAR_CARNUMBER_C',
        })
    public CAR_CARNUMBER_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'CAR_DESCRIPFRA_C',
        })
    public CAR_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'CAR_DESCRIPNED_C',
        })
    public CAR_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'CAR_USERID_C',
        })
    public CAR_USERID_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'CAR_UPDATEDATE_DAT',
        })
    public CAR_UPDATEDATE_DAT: Date;

}
