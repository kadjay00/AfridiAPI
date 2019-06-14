import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_TAGREQUEST', {schema: 'dbo' } )
export class T_TAGREQUEST {

    @PrimaryGeneratedColumn({
        type: 'numeric',
       // scale:0,
        name: 'TRQ_IDENTITY_D',
        })
    public TRQ_IDENTITY_D: number;

    @Column('datetime', {
        nullable: true,
        name: 'TRQ_REQUEST_DAT',
        })
    public TRQ_REQUEST_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'TRQ_IDNUMBER_C',
        })
    public TRQ_IDNUMBER_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'TRQ_FORMAT_C',
        })
    public TRQ_FORMAT_C: string | null;

    @Column('int', {
        nullable: true,
        name: 'TRQ_QUANTITY_N',
        })
    public TRQ_QUANTITY_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'TRQ_STATUS_C',
        })
    public TRQ_STATUS_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'TRQ_REASON_C',
        })
    public TRQ_REASON_C: string | null;

}
