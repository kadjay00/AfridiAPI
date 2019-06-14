import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACCOUNT_ACTIVITY', {schema: 'dbo' } )
export class T_ACCOUNT_ACTIVITY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 20,
        name: 'ACA_ACCOUNTNUMBER_C',
        })
    public ACA_ACCOUNTNUMBER_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'ACA_ACTIVITY_N',
        })
    public ACA_ACTIVITY_N: number;

    @Column('char', {
        nullable: true,
        name: 'ACA_ALLOWED_C',
        })
    public ACA_ALLOWED_C: string | null;

}
