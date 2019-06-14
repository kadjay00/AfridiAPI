import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_IMOVE_LOSTTICKETS', {schema: 'dbo' } )
export class T_IMOVE_LOSTTICKETS {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'ILT_TICKETDATE_DAT',
        })
    public ILT_TICKETDATE_DAT: Date;

    @Column('numeric', {
        nullable: false,
        primary: true,
        precision: 16,
        scale: 0,
        name: 'ILT_EANCODE_N',
        })
    public ILT_EANCODE_N: number;

}
