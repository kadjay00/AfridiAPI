import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CO_ITEMREMARK_ORIGIN', {schema: 'dbo' } )
export class T_CO_ITEMREMARK_ORIGIN {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'IRO_ORIGIN_C',
        })
    public IRO_ORIGIN_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IRO_DESCRIPFRA_C',
        })
    public IRO_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'IRO_DESCRIPNED_C',
        })
    public IRO_DESCRIPNED_C: string | null;

}
