import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DONATION', {schema: 'dbo' } )
export class T_DONATION {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'DON_DONATIONID_N',
        })
    public DON_DONATIONID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 500,
        name: 'DON_HOST_C',
        })
    public DON_HOST_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'DON_CREATION_DAT',
        })
    public DON_CREATION_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'DON_STATUS_C',
        })
    public DON_STATUS_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'DON_STATUS_DAT',
        })
    public DON_STATUS_DAT: Date;

    @Column('smallint', {
        nullable: false,
        name: 'DON_ATTEMPT_N',
        })
    public DON_ATTEMPT_N: number;

}
