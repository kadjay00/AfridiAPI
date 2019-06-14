import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DONATION_ATTEMPT', {schema: 'dbo' } )
export class T_DONATION_ATTEMPT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'DOA_DONATIONID_N',
        })
    public DOA_DONATIONID_N: number;

    @Column('smallint', {
        nullable: false,
        primary: true,
        name: 'DOA_ATTEMPT_N',
        })
    public DOA_ATTEMPT_N: number;

    @Column('varchar', {
        nullable: false,
        length: 1,
        name: 'DOA_STATUS_C',
        })
    public DOA_STATUS_C: string;

    @Column('datetime', {
        nullable: false,
        name: 'DOA_STATUS_DAT',
        })
    public DOA_STATUS_DAT: Date;

    @Column('varchar', {
        nullable: false,
        length: 500,
        name: 'DOA_MESSAGE_C',
        })
    public DOA_MESSAGE_C: string;

}
