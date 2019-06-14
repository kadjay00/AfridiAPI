import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_PICTOSEQ', {schema: 'dbo' } )
export class T_BALANCE_PICTOSEQ {

    @Column('numeric', {
        nullable: false,
        primary: true,
        scale: 0,
        name: 'BPS_BGRID_N',
        })
    public BPS_BGRID_N: number;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'BPS_PICCODE_C',
        })
    public BPS_PICCODE_C: string;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'BPS_SEQUENCE',
        })
    public BPS_SEQUENCE: number | null;

}
