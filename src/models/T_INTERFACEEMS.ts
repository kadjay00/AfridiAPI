import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_INTERFACEEMS', {schema: 'dbo' } )
@Index('IX_INTERFACEEMS_PKINDEX', ['EMS_PROMONBR_N'], {unique: true})
export class T_INTERFACEEMS {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'EMS_PROMONBR_N',
        })
    public EMS_PROMONBR_N: number;

}
