import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STAFF_FERIE', {schema: 'dbo' } )
export class T_STAFF_FERIE {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // scale:0,
        name: 'FER_KEYID_N',
        })
    public FER_KEYID_N: number;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'FER_NBRCONTRACT_N',
        })
    public FER_NBRCONTRACT_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'FER_HOURSREC_N',
        })
    public FER_HOURSREC_N: number | null;

    @Column('numeric', {
        nullable: true,
        precision: 4,
        scale: 2,
        name: 'FER_HOURSPAID_N',
        })
    public FER_HOURSPAID_N: number | null;

}
