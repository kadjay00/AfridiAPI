import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SEQUENCE_REPORT', {schema: 'dbo' } )
export class T_SEQUENCE_REPORT {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SER_REPORTID_N',
        })
    public SER_REPORTID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SER_DESCRIPNED_C',
        })
    public SER_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SER_DESCRIPFRA_C',
        })
    public SER_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'SER_DWNAME_C',
        })
    public SER_DWNAME_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'SER_VISIBLE_C',
        })
    public SER_VISIBLE_C: string | null;

}
